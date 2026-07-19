# 🔥 Keywords in JavaScript

> **Mental Hook**: *"Keywords are words JavaScript already owns — I can't use them as variable names."*

---

## 🎯 One-Liner Memory Shot

| Keyword | = What? | 🚫 Can I Name a Variable It? | 🧠 JavaScript Uses It For... |
|---------|---------|------------------------------|------------------------------|
| 🔒 **Reserved Words** | Special words pre-defined by the language | ❌ Nope, SyntaxError | Controlling program flow, data, logic |

---

## 🧠 Visual Pipeline

```
👨‍💻 I write code...
       │
       ▼
🧠 JavaScript Engine (V8 / SpiderMonkey)
       │  ┌─────────────────────────────┐
       │  │ Lexer: "tokenizes" my code  │
       │  │ --- spots keywords FIRST ---│
       │  └─────────────────────────────┘
       │  "Ah! This says `function` — not a variable name, it's a keyword."
       ▼
🌳 Parser builds AST (Abstract Syntax Tree)
       │  Keywords define the NODES of the tree
       │  `if` → IfStatement node
       │  `for` → ForStatement node
       │  `return` → ReturnStatement node
       ▼
⚡ Execution — each keyword triggers a specific behaviour
       │  `let` → hoist but don't initialize (TDZ)
       │  `const` → hoist, block-scope, can't reassign
       │  `function` → hoist + initialize
       ▼
✅ Program runs (or 💥 SyntaxError if I misused a keyword)
```

---

## 📋 Keywords at a Glance — By Category

| Category | Keywords | 💡 What They Do |
|----------|----------|-----------------|
| **Declaring Stuff** | `var` `let` `const` | Create variables |
| **Functions** | `function` `return` `yield` `async` `await` | Define and control functions |
| **Control Flow** | `if` `else` `switch` `case` `default` | Make decisions |
| **Loops** | `for` `while` `do` `break` `continue` `in` `of` | Repeat things |
| **Classes & Objects** | `class` `extends` `super` `new` `this` `static` | OOP in JS |
| **Modules** | `import` `export` `default` (export context) | Split code across files |
| **Error Handling** | `try` `catch` `finally` `throw` | Handle problems gracefully |
| **Type Checking** | `typeof` `instanceof` | Check what something is |
| **Other Keywords** | `with` `debugger` `void` `delete` | Deprecated scope extension, pause execution, return undefined, remove props |
| **Reserved Literals** ⚠️ | `null` `true` `false` | Technically literals, but still RESERVED — can't be variable names |
| **Reserved (Future)** | `enum` `implements` `interface` `package` `private` `protected` `public` | Saved for future JS versions |

---

## 🔁 Real Code Walkthrough

### ✍️ What Happens When I Write This:

```javascript
async function fetchUser(id) {
  const url = `/api/users/${id}`;
  try {
    let response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error('User not found');
  }
}

export default fetchUser;
```

| Stage | 👀 What Happens | Engine Sees... |
|-------|----------------|----------------|
| 🔤 **Lexer Tokenizes** | Engine scans each word character-by-character | `async` → keyword token, `function` → keyword token, `fetchUser` → identifier, `(` → punctuation |
| 🌳 **Parser Builds AST** | Keywords create specific tree nodes | `FunctionDeclaration` node with `async: true`, `TryStatement` inside, `CatchClause` attached |
| 📦 **Scope Created** | `const`, `let`, `function` set up scope | `url` → block-scoped in function, `response` → block-scoped in `try` block |
| ⚡ **Runtime Execution** | `await` pauses execution until Promise resolves | `await fetch(url)` → Engine yields, waits, resumes with resolved value |
| 💥 **Error Path** | `throw` creates and throws Error object | `new Error('...')` → creates object, `throw` → unwinds stack to nearest `catch` |
| 📤 **Export** | `export default` marks module's public API | Module map records: `fetchUser` is the default export of this file |

---

## 🍳 Kitchen Analogy

| Concept | 🍳 In a Kitchen... |
|---------|-------------------|
| **Keywords** | 🏷️ Official kitchen labels — "OVEN", "STOVE", "KNIFE" |
| **Identifiers** (my variable names) | 📝 Sticky notes I write myself — "sugar", "sauce pan #2" |
| **Using a keyword as a variable** | ❌ Putting my sticky note OVER the "OVEN" label — health inspector (JS engine) freaks out |
| **SyntaxError** | 🚨 Fire alarm goes off — something is wrong with how I used the kitchen |
| `let` vs `const` | `let` = whiteboard (I can erase & rewrite), `const` = engraved nameplate (can't change it) |
| `try/catch` | 🧯 Fire extinguisher nearby — when oil catches fire, I don't panic, I handle it |

---

## 🎤 Interview Quick Recap

> **"Keywords in JavaScript are reserved words that the engine has pre-assigned meaning to — things like `let`, `const`, `if`, `function`, `return`, `class`, `import`, `await`, and so on. I can't use them as variable names or function names — the lexer tokenizes them as special tokens first, and if I try, I get a SyntaxError. They're the building blocks the parser uses to construct the AST. For example, when V8 sees `async function`, it creates an AsyncFunctionDeclaration node. When it hits `await`, it pauses execution and resumes when the Promise settles. Keywords divide cleanly into categories: declarations (`let`/`const`/`var`), control flow (`if`/`else`/`switch`), loops (`for`/`while`), error handling (`try`/`catch`/`throw`), modules (`import`/`export`), and classes (`class`/`extends`/`super`). Think of them as the oven, stove, and knife labels in a kitchen — I can't rename them, but I use them to build the dish."**
