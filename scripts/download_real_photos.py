import urllib.request
import urllib.parse

headers = {"User-Agent": "Mozilla/5.0"}

# Test 1: Pollinations AI
prompt = "Luxury editorial close-up photograph of Indian Vedic palm reading consultation showing an open hand with subtle golden light tracing the palm lines over warm ivory silk, 8k photorealistic"
url1 = f"https://image.pollinations.ai/prompt/{urllib.parse.quote(prompt)}?width=1200&height=900&nologo=true&seed=101"
try:
    req = urllib.request.Request(url1, headers=headers)
    with urllib.request.urlopen(req, timeout=25) as r:
        data = r.read()
    print("Pollinations OK, bytes:", len(data), "content-type:", r.headers.get("Content-Type"))
except Exception as e:
    print("Pollinations ERR:", e)

# Test 2: Lexica API
try:
    url2 = "https://lexica.art/api/v1/search?q=" + urllib.parse.quote("indian wedding couple royal gold")
    req2 = urllib.request.Request(url2, headers=headers)
    with urllib.request.urlopen(req2, timeout=15) as r2:
        print("Lexica OK, bytes:", len(r2.read()))
except Exception as e:
    print("Lexica ERR:", e)
