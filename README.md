# 🧩 Composite Resource Allocator

A lightweight JavaScript project demonstrating how a requested workload can be deterministically divided into two valid composite resource blocks while maintaining predefined allocation constraints.

---

## 📖 Project Overview

Composite Resource Allocator is a conceptual resource planning tool that demonstrates efficient workload distribution using a deterministic allocation strategy.

Instead of searching through numerous possible combinations, the allocator instantly selects one of two predefined composite allocation patterns that always satisfy the system constraints.

The project highlights how mathematical observations can simplify decision-making and eliminate unnecessary computation.

---

# 🌍 Real-World Concept

Imagine a cloud platform that needs to distribute a processing request between two compute clusters.

Business rules require:

- Both clusters must be reusable shared environments.
- Each allocated cluster must satisfy predefined capacity rules.
- The total allocated capacity must equal the requested capacity.

Instead of performing expensive searches, the allocator instantly determines two valid resource blocks.

---

# 💡 Core Concept

The allocator uses deterministic branching.

- Even requests are allocated using one composite base block.
- Odd requests are allocated using another composite base block.

This guarantees a valid allocation in constant time.

---

# ⚙️ How the System Works

1. Receive a requested allocation amount.
2. Determine whether the request is even or odd.
3. Select the appropriate predefined composite resource block.
4. Allocate the remaining capacity.
5. Return both resource allocations.

---

# 🧠 Algorithm Used

| Algorithm | Purpose |
|------------|----------|
| Deterministic Conditional Logic | Instantly selects a valid allocation strategy |

---

# 🔄 Step-by-Step Logic

```text
Receive total capacity

        │
        ▼

Is capacity even?

      /      \

    Yes      No

    │          │

Allocate     Allocate
4 Units      9 Units

    │          │

Remaining = Total - Base

    │          │

Return Both Composite Blocks
```

---

# ✨ Key Features

- ⚡ Constant-time allocation
- 🧩 Deterministic decision making
- 📈 Scalable for very large inputs
- 📚 Easy to understand
- 🛠 Minimal implementation
- 💻 Pure JavaScript
- 🚀 Lightweight architecture

---

# 📥 Example

## Input

```text
24
```

## Output

```text
4
20
```

---

## Input

```text
31
```

## Output

```text
9
22
```

---

# 📊 Complexity Analysis

| Operation | Complexity |
|------------|------------|
| Allocation | O(1) |
| Memory | O(1) |

---

# 🛠 Technologies Used

- JavaScript (ES6)
- Node.js

---

# 📁 Project Structure

```
Composite-Resource-Allocator/
│
├── README.md
├── allocator.js
└── LICENSE
```

---

# 🚀 How to Run

## Clone Repository

```bash
git clone https://github.com/mirhamzarahman/Composite-Resource-Allocator.git
```

## Navigate

```bash
cd Composite-Resource-Allocator
```

## Run

```bash
node allocator.js
```

Example

```bash
Input:
24

Output:
4 20
```

---

# 🎯 Learning Outcomes

This project demonstrates:

- Deterministic algorithm design
- Constant-time decision making
- Practical constraint satisfaction
- Efficient conditional branching
- Lightweight software architecture
- Clean JavaScript coding practices

---

# 🚀 Future Improvements

- REST API version
- Web dashboard
- Allocation validation module
- Batch allocation support
- Allocation history
- Resource visualization
- Configurable allocation strategies

---

# 📄 License

This project is licensed under the MIT License.

---

### 👨‍💻 Author

**Mir Hamza Rahman**

GitHub:
https://github.com/mirhamzarahman

Repository:
https://github.com/mirhamzarahman/Composite-Resource-Allocator

---
