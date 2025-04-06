`

✅ When Does useEffect Re-run with Objects as Dependencies?

1️⃣ Inline Object as a Prop (New Reference on Each Render)

🔴 useEffect runs every re-render because a new object is created each time.

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child obj={{ key: "value" }} /> {/* New object every render */}
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
    </div>
  );
};

const Child = ({ obj }) => {
  useEffect(() => {
    console.log("useEffect ran in Child");
  }, [obj]);

  return <div>Child Component</div>;
};

Why?
	•	{ key: "value" } is created inline inside JSX.
	•	Each re-render creates a new object reference.
	•	Since useEffect runs on reference changes, it triggers every time.

✅ Fix: Use useMemo to keep the same reference.

const memoizedObj = useMemo(() => ({ key: "value" }), []);
<Child obj={memoizedObj} />

2️⃣ Setting State with a New Object Reference (Even if Values Are the Same)

🔴 useEffect runs every time state is updated with a new object.

const App = () => {
  const [user, setUser] = useState({ name: "birendra" });

  useEffect(() => {
    console.log("useEffect ran");
  }, [user]);

  return (
    <button onClick={() => setUser({ name: "birendra" })}>
      Update User
    </button>
  );
};

Why?
	•	setUser({ name: "birendra" }) creates a new object every click.
	•	Even though the values inside are the same, the reference is different.
	•	useEffect detects the new reference and re-runs.

✅ Fix: Use functional updates to prevent unnecessary updates.

<button onClick={() => setUser((prev) => prev)}>Update User</button>

3️⃣ Updating a Nested Object in State (New Reference Even if Only a Part Changes)

🔴 useEffect runs if any part of the object is updated, even if only one field is changed.

const App = () => {
  const [user, setUser] = useState({ name: "birendra", age: 30 });

  useEffect(() => {
    console.log("useEffect ran");
  }, [user]);

  return (
    <button onClick={() => setUser((prev) => ({ ...prev, age: prev.age }))}>
      Update Age
    </button>
  );
};

Why?
	•	setUser({ ...prev, age: prev.age }) creates a new object reference even if age is the same.
	•	React detects a new reference and triggers useEffect.

✅ Fix: Compare values before updating.

<button
  onClick={() =>
    setUser((prev) =>
      prev.age === prev.age ? prev : { ...prev, age: prev.age }
    )
  }
>
  Update Age
</button>

🚫 When Does useEffect NOT Re-run?

4️⃣ Using useState Without Changing the Object

🟢 useEffect runs only once on mount because the state reference remains the same.

const App = () => {
  const [user, setUser] = useState({ name: "birendra" });

  useEffect(() => {
    console.log("useEffect ran");
  }, [user]);

  return <button onClick={() => console.log("Clicked!")}>Click Me</button>;
};

✅ Since setUser is never called, the reference never changes, and useEffect does not re-run.

5️⃣ Passing a State Object as a Prop (Without Changing It)

🟢 useEffect runs only once unless the state changes.

const Parent = () => {
  const [user, setUser] = useState({ name: "birendra" });

  return <Child obj={user} />;
};

const Child = ({ obj }) => {
  useEffect(() => {
    console.log("useEffect ran in Child");
  }, [obj]);

  return <div>Child Component</div>;
};

✅ user is stored in state, so React preserves the reference across renders.
	•	useEffect will NOT run unless setUser is called with a new reference.

6️⃣ Using useMemo to Keep the Same Object Reference

🟢 useEffect does not run unnecessarily if we memoize the object.

const Parent = () => {
  const [count, setCount] = useState(0);
  const memoizedObj = useMemo(() => ({ key: "value" }), []);

  return (
    <div>
      <Child obj={memoizedObj} />
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
    </div>
  );
};

✅ Even if Parent re-renders, useEffect in Child does not run because useMemo ensures the same reference is used.

🔥 Summary Table

Scenario	Will useEffect Re-run?	Why?	Fix
Inline object in JSX (obj={{ key: "value" }})	✅ Yes, every render	New object reference each time	Use useMemo
Calling setState({ same values })	✅ Yes	New object reference	Use functional update setState(prev => prev)
Updating a nested object with setState({...prev})	✅ Yes	Creates a new reference	Compare before updating
Using useState(obj) but not changing it	❌ No	React keeps the same reference	No fix needed
Passing a state object as a prop	❌ No (unless updated)	State reference is preserved	No fix needed
Using useMemo for object props	❌ No	Memoization preserves the reference	No fix needed

🚀 Key Takeaways
	1.	React tracks dependencies using reference equality (===), not value equality.
	2.	New object references trigger useEffect, even if values are the same.
	3.	To prevent unnecessary useEffect runs:
	•	Use useMemo for props to keep the same reference.
	•	Use functional updates (prev => prev) to avoid creating new state references unnecessarily.
	•	Check if values actually change before updating nested state.

Let me know if you need more clarity! 🚀🔥

`