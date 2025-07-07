# ⚙️ Algorithm Design & Trade-offs

## ✅ Matching Logic

We use a simple difference-based scoring algorithm:

score = sum of (5 - |userPref - neighborhoodValue|) for each attribute


Each attribute contributes 0–5 points. Total possible score = 25.

This rewards neighborhoods that are **closer to the user's preferences**.

---

## 🔧 Example

If user gives:
- Safety: 4
- Transport: 5

And a neighborhood has:
- Safety: 3 → (5 - 1) = 4
- Transport: 5 → (5 - 0) = 5

Partial score = 9

---

## 📉 Trade-offs

| Trade-off | Details |
|-----------|---------|
| ❌ Equal weights | All attributes treated equally — doesn't reflect user priorities |
| ✅ Simplicity | Easy to understand, test, and extend |
| ✅ Scalable | Can support many cities and attributes with minimal changes |
| ✅ Extensible | Can add weights or ML later |

---

## 🧪 Testing Approach

- Used 6 Indian neighborhoods with varied scores
- Sent user inputs via frontend sliders
- Compared top 3 results with known perceptions (e.g., Bandra being walkable)

Results aligned well.