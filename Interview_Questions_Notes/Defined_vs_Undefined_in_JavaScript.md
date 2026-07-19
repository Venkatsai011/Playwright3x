# 🔥 Defined vs Undefined in JavaScript

> **Mental Hook**: *"Defined = value exists. Undefined = JavaScript's way of saying 'there's nothing here, but I know about it.'"*

---

## 🎯 One-Liner Memory Shot

| Term | = What? | 🧠 JavaScript's Perspective | Example |
|-------|---------|----------------------------|---------|
| ✅ **Defined** | Variable exists AND has been assigned a value | "Got it, this is what it holds." | `let x = 5;` |
| ❓ **Undefined** | Variable exists but has NOT been assigned — OR a missing property / return | "I know this slot exists, but nobody put anything in it." | `let x;` → `undefined` |
| 💀 **Not Defined** | Variable doesn't exist AT ALL in any scope | 💥 `ReferenceError` — "I've never heard of this thing." | `console.log(z);` (where `z` was never declared) |

---

## 🧠 Visual Pipeline

```
I write code...
       │
       ▼
🔤 Lexer tokenizes `let x;`
       │
       ▼
🌳 Parser sees `let x` → allocates memory slot "x"
       │  ┌────────────────────────────────┐
       │  │ x gets HOISTED in scope        │
       │  │ Initialized to: `undefined` 🏷️  │ ← DEFAULT VALUE
       │  └────────────────────────────────┘
       │
       ├─── Has `x` been assigned yet? ───┐
       │                                  │
    ❌ NO ←──────────────────────────── ✅ YES
       │                                  │
       ▼                                  ▼
  🔴 undefined                     🟢 defined
  `typeof x → "undefined"`         `typeof x → actual type`
       │                                  │
       ▼                                  ▼
  "The slot exists,                 "The slot has a value.
   but it's empty."                 I can use it."
```

```
👨‍💻 Three different scenarios in code:

1️⃣  let a;           → 🟡 Declared, NOT assigned → `undefined`
2️⃣  let b = null;    → 🟢 Declared, explicitly set to "nothing" → `null`
3️⃣  console.log(c);  → 💀 NEVER declared → `ReferenceError: c is not defined`
```

---

## 📋 Defined vs Undefined — Full Comparison

| | ✅ Defined | ❓ Undefined | 💀 Not Defined |
|---|-----------|-------------|----------------|
| **Variable exists?** | ✅ Yes | ✅ Yes (slot created) | ❌ No (no slot) |
| **Value assigned?** | ✅ Yes (anything including `null`) | ❌ No value yet | ❌ No variable to assign to |
| **`typeof` result** | Actual type (`"number"`, `"string"`, etc.) | `"undefined"` | `"undefined"` ⚠️ (confusing!) |
| **Can I use it?** | ✅ Yes | ⚠️ Yes, but it's `undefined` | 💥 No — `ReferenceError` |
| **`== null` ?** | Depends on value | `true` (loose equality) | 💥 Error |
| **Memory allocated?** | ✅ Yes | ✅ Yes (with default `undefined`) | ❌ No |
| **In `window` / `globalThis`?** | ✅ Yes | ✅ Yes | ❌ No |
| **Examples** | `let x = 5;`, `const y = {};` | `let x;`, missing function arg, missing object property | Calling `z` when never declared |

---

## 🔁 Real Code Walkthrough

### ✍️ Let's Trace Every Path:

```javascript
// CASE 1: Defined
let name = "Venkat";

// CASE 2: Undefined (declared, not assigned)
let age;

// CASE 3: Undefined (function returns nothing)
function greet() {
  console.log("hi");
  // no return → implicitly returns undefined
}

// CASE 4: Undefined (missing property on object)
const user = { id: 1 };

// CASE 5: Undefined (missing function argument)
function show(x) {
  console.log(x);
}
```

| Stage | Code | 👀 What Happens | Value |
|-------|------|----------------|-------|
| 🔤 **Lexer** | `let name = "Venkat"` | Tokenizes `let`, `name`, `=`, `"Venkat"` | — |
| 📦 **Hoisting** | `let name` | Slot created, initialized to `undefined` (in TDZ for `let`!) | `undefined` (until assignment) |
| ✍️ **Assignment** | `= "Venkat"` | `undefined` → `"Venkat"` | 🟢 `"Venkat"` (defined) |
| 📦 **Hoisting** | `let age` | Slot created | 🟡 `undefined` |
| ❌ **No Assignment** | `age` never got `=` | Remains default | 🟡 `undefined` |
| 🔙 **Return** | `greet()` / no `return` | Function body runs, implicit `return;` | 🟡 `undefined` |
| 🔍 **Property Access** | `user.score` | Property doesn't exist on object | 🟡 `undefined` (no error!) |
| 📞 **Missing Arg** | `show()` with no argument | Parameter `x` gets default | 🟡 `undefined` |
| 💀 **Not Declared** | `console.log(z)` | Engine walks all scopes → nothing found | 💥 `ReferenceError: z is not defined` |

---

## 🍳 Kitchen Analogy

| Concept | 🍳 In a Kitchen... |
|---------|-------------------|
| **Defined** | 🍽️ A labeled container with food in it — "Flour container → has flour." |
| **Undefined** | 🏷️ An empty labeled container — "Sugar jar... but it's empty." The jar EXISTS (slot is there), just nothing inside. |
| **Not Defined** | 👻 I ask for the "spice rack #7" — but there IS no spice rack #7. Kitchen never had it. |
| `typeof` on not-defined | 🕵️ "What IS spice rack #7?" → Kitchen says "undefined" instead of screaming. (Safety mechanism — `typeof z` returns `"undefined"`, doesn't throw.) |
| Missing function return | 🧑‍🍳 Chef walks away without handing me the dish → I get nothing (`undefined`). |
| Missing object property | 📦 Opening a drawer labeled "utensils" but the specific slot is empty. |

---

## 🎤 Interview Quick Recap

> **"In JavaScript, there's a key distinction between defined, undefined, and not defined. 'Defined' means a variable exists AND holds a value — anything from a number to `null`. 'Undefined' means the variable slot exists in memory but hasn't been assigned yet — JavaScript auto-initializes declared variables to `undefined`. I'll also see `undefined` when a function has no `return`, when I access a non-existent object property, or when a function argument is omitted. 'Not defined' is totally different — it means the variable doesn't exist in any scope at all, and trying to access it throws a `ReferenceError`. A common gotcha: `typeof` on a not-defined variable returns `"undefined"` instead of throwing — it's the only operator that can safely check for undeclared variables. Think of it like kitchen storage: defined is a labeled container with food, undefined is a labeled but empty container, and not defined is asking for a container that was never even bought."**
