"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { BRAND_INFO } from "@/data/siteData";

export interface WalletTransaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  minutes: number;
  title: string;
  subtitle: string;
  method: string;
  timestamp: string;
}

interface WalletContextValue {
  balance: number;
  availableMinutes: number;
  transactions: WalletTransaction[];
  isWalletModalOpen: boolean;
  preselectedAmount: number;
  openWalletModal: (defaultAmount?: number) => void;
  closeWalletModal: () => void;
  rechargeWallet: (amount: number, method: string) => void;
  deductConsultation: (
    minutes: number,
    serviceName: string,
    mode: string,
    clientName: string
  ) => { success: boolean; message: string; txId?: string };
}

const WalletContext = createContext<WalletContextValue | undefined>(undefined);

const STORAGE_KEY = "dr_amit_astro_wallet_v1";

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<WalletTransaction[]>([]);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [preselectedAmount, setPreselectedAmount] = useState<number>(300);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.balance === "number") setBalance(parsed.balance);
        if (Array.isArray(parsed.transactions))
          setTransactions(parsed.transactions);
      }
    } catch {
      // ignore localStorage errors
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ balance, transactions })
      );
    } catch {
      // ignore localStorage errors
    }
  }, [balance, transactions, hydrated]);

  const availableMinutes = Math.floor(balance / BRAND_INFO.ratePerMinute);

  const openWalletModal = (defaultAmount?: number) => {
    if (defaultAmount && defaultAmount > 0) {
      setPreselectedAmount(defaultAmount);
    }
    setIsWalletModalOpen(true);
  };

  const closeWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  const rechargeWallet = (amount: number, method: string) => {
    if (amount <= 0) return;
    const mins = Math.floor(amount / BRAND_INFO.ratePerMinute);
    const tx: WalletTransaction = {
      id: `TXN-${Date.now().toString().slice(-6)}`,
      type: "credit",
      amount,
      minutes: mins,
      title: `Wallet Recharge (+${mins} Mins)`,
      subtitle: `Added at ₹${BRAND_INFO.ratePerMinute}/minute rate`,
      method,
      timestamp: new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setBalance((prev) => prev + amount);
    setTransactions((prev) => [tx, ...prev]);
  };

  const deductConsultation = (
    minutes: number,
    serviceName: string,
    mode: string,
    clientName: string
  ) => {
    const cost = minutes * BRAND_INFO.ratePerMinute;
    if (balance < cost) {
      return {
        success: false,
        message: `Insufficient wallet balance. Required: ₹${cost} (${minutes} mins), Available: ₹${balance}.`,
      };
    }

    const txId = `ASTRO-${Date.now().toString().slice(-6)}`;
    const tx: WalletTransaction = {
      id: txId,
      type: "debit",
      amount: cost,
      minutes,
      title: `${serviceName} (${minutes} Mins)`,
      subtitle: `${mode} • Booked for ${clientName}`,
      method: "Consultation Wallet",
      timestamp: new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setBalance((prev) => prev - cost);
    setTransactions((prev) => [tx, ...prev]);
    return {
      success: true,
      message: `₹${cost} (${minutes} mins) deducted from your Consultation Wallet.`,
      txId,
    };
  };

  return (
    <WalletContext.Provider
      value={{
        balance,
        availableMinutes,
        transactions,
        isWalletModalOpen,
        preselectedAmount,
        openWalletModal,
        closeWalletModal,
        rechargeWallet,
        deductConsultation,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet(): WalletContextValue {
  const ctx = useContext(WalletContext);
  if (!ctx) {
    return {
      balance: 0,
      availableMinutes: 0,
      transactions: [],
      isWalletModalOpen: false,
      preselectedAmount: 300,
      openWalletModal: () => {},
      closeWalletModal: () => {},
      rechargeWallet: () => {},
      deductConsultation: () => ({
        success: false,
        message: "Wallet initializing",
      }),
    };
  }
  return ctx;
}
