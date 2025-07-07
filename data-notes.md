# 🗂️ Data Strategy & Handling

## Data Sources

- 🔍 **Real City Names Used:** Hyderabad, Bangalore, Mumbai, Pune
- 🏘️ **Neighborhoods Selected:** Commonly known areas like Kondapur, Whitefield, Bandra, Hinjewadi, etc.
- ⚠️ **Mocked Attributes:** Each neighborhood has 5 attributes rated 1-5:
  - Safety
  - Affordability
  - Public Transport
  - Greenery
  - Walkability

---

## Why This Approach?

Due to:
- ⛔ No free public API access for Indian neighborhood lifestyle data
- 🕒 Tight deadline (2 weeks)
- 💰 Zero budget

→ We created **semi-realistic mock data** manually using common knowledge and insights from city comparison blogs and real estate platforms.

---

## Data Structure Example

```json
{
  "name": "Whitefield",
  "city": "Bangalore",
  "safety": 4,
  "affordability": 3,
  "publicTransport": 5,
  "greenery": 3,
  "walkability": 4
}
