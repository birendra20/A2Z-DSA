Perfect.
This cannot fit in one response while keeping true 45–60 minute depth, so I’ll do this properly in batches, exactly like a real interview walkthrough.

I will convert the whiteboard-only design into a spoken mock interview script where:
	•	You are the candidate
	•	I include natural pauses, clarifications, and interviewer nudges
	•	The pacing is realistic (thinking aloud, trade-offs, corrections)
	•	No rushing, no compression, no filler

I’ll also clearly label each part so you can practice in sessions.

⸻

🎙️ DESIGN A CHAT APPLICATION — 45–60 MIN SPOKEN INTERVIEW

PART 1: INTRO, REQUIREMENTS & SCOPE (≈ 12–15 minutes)

Speaking pace: calm, deliberate
Tone: senior engineer, structured thinking
Do NOT rush this part in interview

⸻

👤 Interviewer

Let’s start with a system design question.
Design a chat application end-to-end.

⸻

👤 Candidate (You)

Alright, sounds good.
Before jumping into the architecture, I’d like to clarify the requirements and scope, because chat systems can vary a lot depending on scale and features.

I’ll start by asking a few clarifying questions, and then I’ll explicitly state my assumptions before moving forward.

⸻

1️⃣ CLARIFYING QUESTIONS

First, regarding features:
	•	Are we designing 1-to-1 chat only, or should we also support group chats?
	•	Do we need real-time delivery, meaning messages should be delivered instantly when users are online?
	•	Should the system support message history, so users can see past messages when they reconnect?
	•	Do we need advanced features like:
	•	typing indicators
	•	read receipts
	•	online/offline presence?

Now about scale:
	•	Roughly how many users are we talking about?
	•	Thousands?
	•	Millions?
	•	Hundreds of millions?
	•	Are users globally distributed, or mostly in a single region?

And finally, about platforms:
	•	Should this support mobile and web clients?
	•	Is media sharing (images, videos) in scope, or can we start with text-only?

⸻

👤 Interviewer

Let’s assume:
	•	Both 1:1 and group chat
	•	Real-time messaging
	•	Message history is required
	•	Typing indicators and presence are nice to have
	•	Scale: tens of millions of users globally
	•	Text messages only for now

⸻

👤 Candidate

Perfect.
I’ll design the system with those assumptions.

⸻

2️⃣ RESTATING REQUIREMENTS (VERY IMPORTANT)

I’ll restate the requirements to ensure we’re aligned.

⸻

✅ Functional Requirements

So functionally, the system should support:
	1.	One-to-one chat
	2.	Group chat
	3.	Real-time message delivery
	4.	Message persistence
	•	Users should be able to fetch history
	5.	Online / offline presence
	6.	Typing indicators
	7.	Optional:
	•	Read receipts (we’ll discuss trade-offs)

⸻

✅ Non-Functional Requirements

From a system perspective, the most important non-functional requirements are:
	1.	Low latency
	•	Messages should feel instant
	2.	High availability
	•	Chat should still work even if parts of the system fail
	3.	Scalability
	•	Must handle tens of millions of concurrent users
	4.	Message ordering
	•	Messages in a conversation must appear in order
	5.	Durability
	•	Messages should not be lost
	6.	Fault tolerance
	•	Graceful handling of failures
	7.	Security
	•	Authentication and authorization

I’ll keep these in mind as guiding principles while designing the system.

⸻

3️⃣ HIGH-LEVEL APPROACH

Before drawing boxes, I want to outline my high-level approach.

A chat system has three major concerns:
	1.	Real-time communication
	•	How messages move instantly between users
	2.	Persistence
	•	How messages are stored safely and retrieved
	3.	Presence & delivery
	•	Knowing who is online and where to send messages

Because of this, the architecture usually splits into:
	•	A real-time layer (WebSockets)
	•	A message processing layer
	•	A storage layer
	•	A presence system

I’ll start with a high-level architecture, then zoom into each piece.

⸻

4️⃣ HIGH-LEVEL ARCHITECTURE (SPEAK WHILE DRAWING)

If I were at a whiteboard, I’d start drawing from left to right.

⸻

🖊️ Candidate (speaking while drawing)

On the left side, we have the clients.

These could be:
	•	Mobile apps
	•	Web apps

Each client establishes a persistent connection, typically using WebSockets, because HTTP polling is inefficient for real-time chat.

⸻

From the clients, connections go to a Real-Time Gateway layer.

This layer is responsible for:
	•	Managing WebSocket connections
	•	Receiving messages
	•	Pushing messages to connected clients

These servers are:
	•	Stateless
	•	Horizontally scalable

⸻

Behind the gateway, we have an API / Message Service layer.

This layer:
	•	Validates messages
	•	Handles authentication and authorization
	•	Persists messages
	•	Publishes events for fan-out

⸻

Then we have a Message Store.

This is our durable storage system where:
	•	Messages are written before delivery
	•	Ordering is enforced
	•	History is fetched from

⸻

Between storage and delivery, we introduce an Event Streaming system, such as:
	•	Kafka
	•	Pulsar
	•	Cloud Pub/Sub

This allows us to:
	•	Decouple message ingestion from delivery
	•	Scale fan-out independently
	•	Handle retries cleanly

⸻

Finally, we have a Fan-Out / Delivery Service that:
	•	Determines recipients
	•	Looks up online users
	•	Pushes messages back through the gateway

⸻

Parallel to all of this, we maintain a Presence Store, typically backed by:
	•	Redis
	•	In-memory datastore

This store answers one key question:

“Is user X online, and if yes, on which server?”

⸻

5️⃣ WHY THIS SEPARATION MATTERS (EXPLAINING TRADE-OFFS)

I want to pause here and explain why this separation is important.

If we combine:
	•	Real-time delivery
	•	Persistence
	•	Fan-out
into a single service, we create:
	•	Tight coupling
	•	Scaling bottlenecks
	•	Failure cascades

By separating concerns:
	•	WebSocket servers scale by connections
	•	Message services scale by write throughput
	•	Fan-out scales by number of recipients

This separation is critical at large scale.

⸻

6️⃣ CLIENT RESPONSIBILITIES (OFTEN MISSED)

Now I’ll zoom into the client side, because clients play a surprisingly important role in chat systems.

⸻

Client responsibilities include:
	1.	Maintaining WebSocket connection
	2.	Handling reconnects
	3.	De-duplicating messages
	4.	Ordering messages
	5.	Buffering messages temporarily

For example:
	•	If the network drops for 5 seconds,
	•	The client reconnects and says:
“Here is the last message sequence number I received.”

This allows the server to resend missed messages.

⸻

The client typically keeps:
	•	last_received_sequence_id
	•	A list of pending outgoing messages
	•	A local message cache

This reduces server complexity and improves reliability.

⸻

7️⃣ PAUSE & TRANSITION

At this point in the interview, I’d pause and say:

“So far, I’ve covered requirements, high-level architecture, and client responsibilities.
Next, I’ll deep dive into the core message send and delivery flow, which is the heart of the system.”

⸻

📌 END OF PART 1

⸻

What’s next in PART 2 (≈ 15 minutes):
	•	Detailed message send flow
	•	Persistence before fan-out
	•	Sequence IDs & ordering guarantees
	•	At-least-once delivery
	•	Idempotency

When you’re ready, just say:

👉 “Continue with Part 2”

I’ll maintain the same depth and pacing.

Perfect. Continuing exactly in the same interview-realistic, slow, spoken style.

⸻

🎙️ DESIGN A CHAT APPLICATION — 45–60 MIN SPOKEN INTERVIEW

PART 2: MESSAGE SEND FLOW, PERSISTENCE & ORDERING (≈ 15–18 minutes)

Goal of this part:
Show deep understanding of core correctness, not just architecture diagrams.

⸻

👤 Interviewer

Okay, let’s deep dive into the message flow.
How does a message move through your system?

⸻

👤 Candidate (You)

Sure.
This is the most critical part of a chat system, because this is where correctness guarantees like ordering, durability, and delivery semantics are decided.

I’ll walk through the message send flow step by step, starting from the client.

⸻

1️⃣ MESSAGE SEND — HIGH-LEVEL OVERVIEW

At a high level, when a user sends a message:
	1.	Client sends message over WebSocket
	2.	Gateway validates and authenticates
	3.	Message is persisted
	4.	Ordering is assigned
	5.	Message event is published
	6.	Message is delivered to recipients

The most important principle here is:

Persist before fan-out

I’ll explain why as we go.

⸻

2️⃣ STEP 1: CLIENT SENDS MESSAGE

Let’s say User A sends a message to User B.

From the client side:
	•	The client generates a client_message_id
	•	Usually a UUID
	•	This is important for idempotency and de-duplication

The payload sent over WebSocket looks something like:

{
  conversation_id,
  client_message_id,
  sender_id,
  content,
  timestamp
}

At this point:
	•	The message is not yet durable
	•	The client optimistically shows the message as “sending”

⸻

3️⃣ STEP 2: REAL-TIME GATEWAY

The message first reaches the WebSocket Gateway server.

Responsibilities of this layer:
	1.	Validate auth token
	2.	Check sender is allowed in the conversation
	3.	Apply rate limiting
	4.	Forward message to Message Service

Important design choice:
	•	Gateway is stateless
	•	It does NOT persist messages
	•	It does NOT decide ordering

This allows us to scale gateways purely based on:
	•	Number of open connections
	•	Incoming message rate

⸻

4️⃣ STEP 3: MESSAGE SERVICE (CRITICAL LOGIC)

Now the message reaches the Message Service, and this is where correctness starts.

Responsibilities here:
	1.	Validate message again (defense in depth)
	2.	Assign server-side ordering
	3.	Persist the message
	4.	Publish event

⸻

5️⃣ MESSAGE ORDERING STRATEGY

This is a very common interview pitfall, so I’ll slow down here.

Problem:

Messages must appear in order per conversation, even if:
	•	Multiple users send simultaneously
	•	Messages arrive at different servers

Solution:

We assign a monotonically increasing sequence ID per conversation.

⸻

How sequence IDs work:
	•	Each conversation has its own sequence counter
	•	When a message is written:
	•	The next sequence ID is assigned
	•	Example:

Conversation 123:
  Message 1 → seq = 101
  Message 2 → seq = 102
  Message 3 → seq = 103

This guarantees:
	•	Total ordering within a conversation
	•	Simple pagination
	•	Easy resync

⸻

Implementation detail:

This sequence ID is usually generated:
	•	Inside the database (auto-increment per partition)
	•	Or via a transactional counter
	•	Or via a single writer per conversation shard

Trade-off:
	•	Slight write contention
	•	But correctness > throughput here

⸻

6️⃣ STEP 4: MESSAGE PERSISTENCE (MOST IMPORTANT)

Now we persist the message.

This is the point of no return.

The write must be:
	•	Durable
	•	Idempotent
	•	Atomic with sequence assignment

The database schema (simplified):

messages (
  conversation_id,
  sequence_id,
  message_id,
  sender_id,
  content,
  timestamp
)
PRIMARY KEY (conversation_id, sequence_id)


⸻

Why persist before fan-out?

If we fan-out first and then persist:
	•	A crash can cause message loss
	•	Or recipients see messages that disappear later

By persisting first:
	•	Messages are always recoverable
	•	Delivery can be retried safely

This is a hard requirement in production chat systems.

⸻

7️⃣ IDEMPOTENCY HANDLING

Let’s talk about retries.

If the client doesn’t get an acknowledgment:
	•	It may resend the same message

Without idempotency:
	•	Duplicate messages appear

Solution:
	•	Store client_message_id
	•	If the same (conversation_id, client_message_id) arrives again:
	•	Return the existing message
	•	Do NOT insert again

This gives us exactly-once persistence semantics, even though delivery is at-least-once.

⸻

8️⃣ STEP 5: ACKNOWLEDGEMENT TO SENDER

Once the message is successfully persisted:
	•	The server sends an ACK back to the sender
	•	Includes:
	•	sequence_id
	•	server_timestamp

Now the client:
	•	Marks the message as “sent”
	•	Replaces temporary ID with server ID

This improves UX and consistency.

⸻

9️⃣ STEP 6: EVENT PUBLICATION

After persistence, the Message Service publishes an event:

MessageCreatedEvent {
  conversation_id,
  sequence_id,
  sender_id,
  recipients,
  content
}

This goes to:
	•	Kafka / PubSub / Event Stream

Why async events?
	•	Decouples write path from delivery
	•	Allows retries
	•	Enables additional consumers:
	•	Notifications
	•	Search indexing
	•	Analytics

⸻

🔟 DELIVERY SEMANTICS (AT-LEAST-ONCE)

Now let’s talk about delivery guarantees.

We choose:

At-least-once delivery

Why not exactly-once?
	•	Exactly-once delivery across network boundaries is extremely expensive
	•	Requires distributed transactions
	•	Not worth it for chat UX

Instead:
	•	We allow duplicates
	•	Client de-duplicates using message_id

This is the industry-standard trade-off.

⸻

1️⃣1️⃣ FAN-OUT SERVICE

The Fan-Out Service consumes message events and:
	1.	Determines recipients
	2.	Queries presence store
	3.	Routes messages to correct gateway servers

For 1:1 chat:
	•	One recipient

For group chat:
	•	Many recipients
	•	Possibly hundreds or thousands

This service must:
	•	Scale horizontally
	•	Handle bursts
	•	Be resilient to partial failures

⸻

1️⃣2️⃣ ONLINE VS OFFLINE RECIPIENTS

For each recipient:
	•	If user is online:
	•	Send message via WebSocket
	•	If user is offline:
	•	Skip delivery
	•	Message will be fetched later

Important:
	•	Offline messages are NOT pushed
	•	They are pulled on reconnect

This avoids wasted work.

⸻

1️⃣3️⃣ MESSAGE DELIVERY TO CLIENT

When the client receives a message:
	•	It checks sequence ID
	•	If sequence is expected:
	•	Display immediately
	•	If sequence is ahead:
	•	Buffer temporarily
	•	If duplicate:
	•	Drop silently

This ensures:
	•	Correct ordering
	•	Smooth UX

⸻

1️⃣4️⃣ FAILURE SCENARIOS (INTERVIEW GOLD)

Let’s quickly discuss failures.

Case 1: Gateway crashes after persistence
	•	Message already stored
	•	Event still in stream
	•	Delivery retried

✅ No message loss

⸻

Case 2: Fan-out fails
	•	Event replayed
	•	Idempotent delivery

✅ Eventually delivered

⸻

Case 3: Client disconnects mid-send
	•	Client retries
	•	Idempotency prevents duplication

✅ Safe

⸻

1️⃣5️⃣ PAUSE & TRANSITION

At this point, I’d pause and say:

“So far, we’ve covered the core message pipeline, including persistence, ordering, idempotency, and delivery guarantees.
Next, I’ll deep dive into the real-time layer and presence system, which enable low-latency delivery and online status.”

⸻

📌 END OF PART 2

⸻

What’s coming in PART 3 (≈ 12–15 minutes):
	•	WebSocket architecture
	•	Presence store design
	•	Online/offline detection
	•	Reconnect & resync flow
	•	Typing indicators

When ready, say:

👉 “Continue with Part 3”

I’ll keep the same depth and pacing.

Continuing in the same senior-level, slow, interview-realistic speaking style.
No compression. No shortcuts.

⸻

🎙️ DESIGN A CHAT APPLICATION — 45–60 MIN SPOKEN INTERVIEW

PART 3: REAL-TIME LAYER, PRESENCE & RECONNECT FLOW (≈ 15–18 minutes)

Goal of this part:
Show mastery of real-time systems, connection management, and correctness under churn.

⸻

👤 Interviewer

Alright. How do you handle real-time delivery and presence in your system?

⸻

👤 Candidate (You)

Great question.
This part focuses on how messages move instantly and how we know who is online.

I’ll break this into four sections:
	1.	Real-time communication layer
	2.	WebSocket server design
	3.	Presence system
	4.	Reconnect and resync flow

⸻

1️⃣ WHY WE NEED A REAL-TIME LAYER

First, let’s talk about why WebSockets.

Traditional HTTP request-response is:
	•	Pull-based
	•	High latency
	•	Inefficient for chat

Chat requires:
	•	Persistent connections
	•	Server-initiated pushes
	•	Low latency

So we use:

WebSockets (or long-lived TCP connections)

This gives us:
	•	Full-duplex communication
	•	Low overhead
	•	Instant delivery

⸻

2️⃣ WEB SOCKET SERVER ARCHITECTURE

Now I’ll describe how WebSocket servers are designed.

Key principles:
	•	Stateless servers
	•	Horizontally scalable
	•	Handle millions of open connections
	•	Do NOT store business state

Each WebSocket server handles:
	•	Connection lifecycle
	•	Message push
	•	Heartbeats
	•	Backpressure

⸻

Connection Flow (Step-by-Step)

When a client connects:
	1.	Client opens WebSocket
	2.	Sends auth token
	3.	Server validates token
	4.	Connection accepted
	5.	Connection registered in presence store

This entire flow must be:
	•	Fast
	•	Lightweight
	•	Non-blocking

⸻

Important Interview Insight

A WebSocket connection ≠ user.
	•	A user can have:
	•	Multiple devices
	•	Multiple browser tabs
	•	Each creates a separate connection

So presence is connection-based, not user-based.

⸻

3️⃣ LOAD BALANCING & STICKINESS

Now let’s talk about load balancing.

Because WebSockets are long-lived:
	•	Requests can’t be randomly routed every time

So we need:
	•	Sticky connections

Common approaches:
	•	IP hash
	•	Cookie-based routing
	•	Layer-4 load balancing

This ensures:
	•	Once connected, traffic always goes to the same server

⸻

4️⃣ PRESENCE SYSTEM (CRITICAL)

Presence answers a simple but fundamental question:

“Is user X online, and if yes, where?”

⸻

Presence Store Choice

We typically use:
	•	Redis
	•	In-memory distributed store

Why?
	•	Low latency
	•	TTL support
	•	High write throughput

⸻

Presence Data Model

A typical structure:

user_id → {
  connection_ids[],
  server_ids[],
  last_seen,
  TTL
}

Each connection entry includes:
	•	connection_id
	•	server_id
	•	timestamp

⸻

TTL-Based Cleanup

Every presence entry has a TTL.

Why?
	•	Servers can crash
	•	Clients can disconnect abruptly

TTL ensures:
	•	Stale connections auto-expire
	•	Presence remains accurate

⸻

5️⃣ ONLINE / OFFLINE DETERMINATION

Rules:
	•	If user has ≥1 active connection → ONLINE
	•	If all connections expire → OFFLINE

This supports:
	•	Multi-device users
	•	Seamless device switching

⸻

6️⃣ MESSAGE DELIVERY USING PRESENCE

When Fan-Out wants to deliver a message:
	1.	Query presence store
	2.	Get list of active connections
	3.	Route message to corresponding WebSocket servers
	4.	Push message to clients

This avoids:
	•	Broadcasting to all servers
	•	Inefficient fan-out

⸻

7️⃣ TYPING INDICATORS (EPHEMERAL EVENTS)

Typing indicators are:
	•	Non-critical
	•	Ephemeral
	•	High frequency

So we treat them differently.

⸻

Typing Indicator Design
	•	Sent via WebSocket
	•	Not persisted
	•	Throttled (e.g., once every 2–3 seconds)
	•	TTL-based expiration

Example events:

typing:start
typing:stop

If the event is lost:
	•	It’s fine
	•	UX impact is minimal

This is an important trade-off to mention.

⸻

8️⃣ HEARTBEATS & CONNECTION HEALTH

To detect dead connections:
	•	Server sends periodic pings
	•	Client responds with pong

If:
	•	No response for N seconds
	•	Connection is terminated
	•	Presence entry removed

This keeps the system clean.

⸻

9️⃣ RECONNECT FLOW (VERY IMPORTANT)

Now let’s talk about reconnects, which happen all the time.

Reasons:
	•	Network drops
	•	App backgrounding
	•	Server restarts

⸻

Reconnect Flow

When a client reconnects:
	1.	Establish WebSocket
	2.	Authenticate
	3.	Send last_received_sequence_id
	4.	Server compares with latest
	5.	Server sends missing messages

This ensures:
	•	No message loss
	•	Correct ordering
	•	Seamless UX

⸻

Why Pull Missing Messages?

Because:
	•	Offline users weren’t pushed messages
	•	Fan-out may have failed mid-delivery

Pull-based recovery is simpler and reliable.

⸻

🔟 OUT-OF-ORDER & DUPLICATES

Because delivery is at-least-once:
	•	Messages may arrive out of order
	•	Messages may be duplicated

Client logic handles this:
	•	Drop duplicates using message_id
	•	Buffer out-of-order messages
	•	Render only when sequence matches expected

This shifts complexity to the client, which is intentional.

⸻

1️⃣1️⃣ SCALING THE REAL-TIME LAYER

Challenges:
	•	Millions of concurrent connections
	•	Memory pressure
	•	CPU context switching

Strategies:
	•	Lightweight connection handling
	•	Event-driven I/O
	•	Horizontal scaling
	•	Regional sharding

⸻

1️⃣2️⃣ FAILURE SCENARIOS

Let’s walk through failures.

⸻

Case 1: WebSocket server crashes
	•	Connections drop
	•	Clients reconnect to another server
	•	Presence TTL cleans old entries
	•	Messages recovered via resync

✅ Safe

⸻

Case 2: Presence store temporary outage
	•	Message delivery may be delayed
	•	Persistence unaffected
	•	Retry fan-out

✅ Eventual recovery

⸻

1️⃣3️⃣ INTERVIEWER CHECKPOINT

At this point, I’d say:

“We’ve covered the real-time delivery layer, presence tracking, typing indicators, and reconnect logic.
Next, I’ll move into group chat behavior, media handling, and read receipts, which introduce interesting scaling trade-offs.”

⸻

📌 END OF PART 3

⸻

What’s coming in PART 4 (≈ 12–15 minutes):
	•	Group chat fan-out
	•	Large group optimizations
	•	Media messages
	•	Read receipts trade-offs

When you’re ready, say:

👉 “Continue with Part 4”

I’ll continue seamlessly.

Perfect. Continuing seamlessly, same senior-level spoken interview tone, no compression.

⸻

🎙️ DESIGN A CHAT APPLICATION — 45–60 MIN SPOKEN INTERVIEW

PART 4: GROUP CHAT, MEDIA MESSAGES & READ RECEIPTS (≈ 15–18 minutes)

Goal of this part:
Show depth in fan-out strategies, scaling trade-offs, and practical system constraints.

⸻

👤 Interviewer

Great. Now let’s move beyond one-to-one chat.
How would you design group chat, especially at scale?

⸻

👤 Candidate (You)

Sure.
Group chat is where chat systems stop being “simple CRUD” and start becoming distributed systems problems.

I’ll cover this in five parts:
	1.	Group chat fundamentals
	2.	Fan-out strategies
	3.	Large group optimizations
	4.	Media messages
	5.	Read receipts and typing at scale

⸻

1️⃣ GROUP CHAT FUNDAMENTALS

Let’s first define what we mean by a group.

A group is:
	•	A collection of users
	•	With shared message history
	•	And shared metadata

⸻

Group Metadata

Each group typically has:
	•	group_id
	•	members
	•	roles (admin, member)
	•	created_at
	•	settings (mute, permissions)

This data lives in a Group Service.

⸻

Key Interview Insight

Group membership changes frequently:
	•	Users join
	•	Users leave
	•	Users get kicked

So membership must be dynamic, not baked into messages.

⸻

2️⃣ MESSAGE FAN-OUT STRATEGIES

This is one of the most important interview sections.

When a message is sent to a group:
	•	How do we deliver it to N users?

There are two classic strategies:
	1.	Fan-out on write
	2.	Fan-out on read

⸻

2.1️⃣ FAN-OUT ON WRITE

This means:
	•	When a message is sent
	•	We write a copy for every member

⸻

How it works
	1.	User sends message
	2.	Message is persisted once
	3.	System fetches group members
	4.	Writes message reference to each user’s inbox

⸻

Pros
	•	Fast reads
	•	Simple client logic
	•	Great for small groups

⸻

Cons
	•	Expensive writes
	•	High storage cost
	•	Poor scalability for large groups

⸻

When to Use
	•	1-to-1 chats
	•	Small groups (e.g., <100 members)

⸻

2.2️⃣ FAN-OUT ON READ

Here:
	•	We store the message once
	•	Each user fetches messages when reading

⸻

How it works
	1.	Message stored once per group
	2.	Users query group timeline
	3.	Read cursor tracks progress

⸻

Pros
	•	Storage efficient
	•	Scales to large groups
	•	Simple writes

⸻

Cons
	•	Reads are heavier
	•	Cursor logic is complex
	•	Harder to support per-user deletion

⸻

When to Use
	•	Large groups
	•	Broadcast channels
	•	Public communities

⸻

3️⃣ HYBRID STRATEGY (REAL-WORLD APPROACH)

Most real systems use both.

Example:
	•	Small groups → fan-out on write
	•	Large groups → fan-out on read

Threshold could be:
	•	50 members
	•	100 members
	•	Configurable

This is a business decision, not purely technical.

⸻

4️⃣ LARGE GROUP OPTIMIZATIONS

Let’s assume:
	•	Group has 10,000+ members

We must avoid:
	•	N database writes
	•	N WebSocket pushes

⸻

Solution: Tiered Fan-Out
	1.	Message stored once
	2.	Active online users get real-time push
	3.	Offline users pull later

This reduces:
	•	Fan-out cost
	•	Wasted work

⸻

Presence-Aware Delivery

We reuse presence data:
	•	If user online → push
	•	If offline → skip push

This optimization is critical.

⸻

5️⃣ GROUP PERMISSIONS & ROLES

Each message must validate:
	•	Is sender a group member?
	•	Does sender have permission?
	•	Is group muted or locked?

This validation happens:
	•	At write time
	•	Before persistence

Never trust the client.

⸻

6️⃣ MEDIA MESSAGES (IMAGES, VIDEOS, FILES)

Now let’s move to media.

Media messages are NOT handled like text.

⸻

Why Not Store Media in Chat DB?

Problems:
	•	Large size
	•	Slow reads
	•	Expensive backups

⸻

Media Upload Flow
	1.	Client requests upload URL
	2.	Server returns pre-signed URL
	3.	Client uploads directly to object storage
	4.	Server stores metadata only

⸻

Stored Metadata
	•	media_id
	•	type (image/video/file)
	•	URL
	•	size
	•	thumbnail_url

Message references media_id, not raw bytes.

⸻

7️⃣ MEDIA DELIVERY OPTIMIZATION

Key optimizations:
	•	CDN delivery
	•	Multiple resolutions
	•	Lazy loading
	•	Progressive rendering

This ensures:
	•	Fast initial load
	•	Good mobile experience

⸻

8️⃣ READ RECEIPTS (COMPLEX & EXPENSIVE)

Now let’s talk about read receipts.

Example:
	•	“Seen by 12 people”

This is deceptively expensive.

⸻

Naive Approach (Bad)

For each message:
	•	Store read status per user

This explodes storage:

messages × users

Unacceptable at scale.

⸻

9️⃣ PRACTICAL READ RECEIPT DESIGN

Instead, we use read cursors.

Each user has:
	•	last_read_message_id per conversation

From this:
	•	We infer read status

⸻

Trade-off

We lose:
	•	Exact per-message read timestamps

We gain:
	•	Massive scalability

This trade-off must be explained in interviews.

⸻

🔟 READ RECEIPTS IN LARGE GROUPS

In large groups:
	•	We often disable read receipts entirely
	•	Or show only:
	•	“Seen by X people”
	•	Or top few avatars

Why?
	•	Performance
	•	UX clarity

⸻

1️⃣1️⃣ TYPING INDICATORS IN GROUPS

Typing indicators in groups are tricky.

If 50 users type:
	•	UI becomes noisy
	•	Network traffic explodes

⸻

Optimized Strategy
	•	Limit typing indicators to:
	•	Small groups
	•	Aggregate:
	•	“3 people typing…”
	•	Throttle aggressively

Again: UX + performance trade-off.

⸻

1️⃣2️⃣ MESSAGE ORDERING IN GROUPS

Challenges:
	•	Concurrent sends
	•	Multiple devices
	•	Clock skew

Solution:
	•	Server-assigned sequence numbers
	•	Monotonic ordering per group

Never trust client timestamps.

⸻

1️⃣3️⃣ FAILURE CASES

Let’s examine failures.

⸻

Case 1: Fan-out job fails mid-way
	•	Some users receive message
	•	Others don’t

Recovery:
	•	Offline users pull on reconnect
	•	Read cursor ensures correctness

⸻

Case 2: Media upload succeeds, message fails
	•	Orphaned media objects

Solution:
	•	TTL cleanup jobs
	•	Garbage collection

⸻

1️⃣4️⃣ INTERVIEWER CHECKPOINT

At this point I’d say:

“We’ve now covered group chat delivery, fan-out trade-offs, media handling, and read receipts.
Next, I’ll move into security, privacy, and abuse prevention, which are critical in production chat systems.”

⸻

📌 END OF PART 4

⸻

🔜 Coming in PART 5 (≈ 10–12 minutes):
	•	Authentication & authorization
	•	Message encryption
	•	Abuse prevention & moderation
	•	Rate limiting

Say:

👉 “Continue with Part 5”

and I’ll continue.

Continuing exactly from where we left off, same whiteboard → spoken interview style, senior-level depth, no compression.

⸻

🎙️ DESIGN A CHAT APPLICATION — 45–60 MIN SPOKEN INTERVIEW

PART 5: SECURITY, PRIVACY, AUTHORIZATION & ABUSE PREVENTION (≈ 12–15 minutes)

Goal of this part:
Demonstrate that you can design a production-grade, safe, and trustworthy chat system—not just one that works.

⸻

👤 Interviewer

Alright. Chat systems deal with sensitive user data.
How do you think about security and privacy?

⸻

👤 Candidate (You)

This is a critical part of the design, and I usually structure it into four layers:
	1.	Authentication & authorization
	2.	Message security & encryption
	3.	Abuse prevention & moderation
	4.	Rate limiting & system protection

I’ll go through each one systematically.

⸻

1️⃣ AUTHENTICATION (WHO ARE YOU?)

Authentication answers:

“Who is this user?”

⸻

Token-Based Authentication

Clients authenticate using:
	•	Short-lived access tokens (JWT)
	•	Optional refresh tokens

The flow is:
	1.	User logs in via Auth Service
	2.	Receives access token
	3.	Token is sent:
	•	With HTTP requests
	•	During WebSocket handshake

⸻

Why JWT?
	•	Stateless verification
	•	Fast validation
	•	No DB lookup per request

But:
	•	Tokens must be short-lived
	•	Revocation must be handled carefully

⸻

WebSocket Authentication

Important interview detail:

WebSockets don’t automatically send headers after the handshake.

So we either:
	•	Pass token during connection
	•	Or send auth message immediately after connect

Server validates token before allowing traffic.

⸻

2️⃣ AUTHORIZATION (WHAT ARE YOU ALLOWED TO DO?)

Authorization answers:

“Is this user allowed to do this action?”

⸻

Authorization Checks

Every sensitive action validates:
	•	Is sender authenticated?
	•	Is sender a member of this chat?
	•	Does sender have permission?

Examples:
	•	Sending messages
	•	Editing messages
	•	Deleting messages
	•	Managing groups

⸻

Where Authorization Happens
	•	Always on the server
	•	Never trust the client
	•	Even WebSocket events must be validated

⸻

Group-Level Permissions

Groups introduce role-based access:
	•	Admin
	•	Moderator
	•	Member

Permissions include:
	•	Send messages
	•	Add/remove users
	•	Change group settings

This logic lives in the Group Service.

⸻

3️⃣ MESSAGE ENCRYPTION (DATA PROTECTION)

Now let’s talk about encryption.

There are two layers:
	1.	Encryption in transit
	2.	Encryption at rest

⸻

3.1️⃣ ENCRYPTION IN TRANSIT

All communication uses:
	•	HTTPS
	•	Secure WebSockets (WSS)

This protects against:
	•	Man-in-the-middle attacks
	•	Network sniffing

This is table stakes and expected.

⸻

3.2️⃣ ENCRYPTION AT REST

Messages stored in databases should be encrypted:
	•	Database-level encryption
	•	Disk encryption
	•	Optional field-level encryption

This protects:
	•	Data breaches
	•	Insider threats

⸻

4️⃣ END-TO-END ENCRYPTION (OPTIONAL, ADVANCED)

Now let’s talk about E2EE.

E2EE means:
	•	Server cannot read message content
	•	Only sender and recipient can decrypt

⸻

Trade-offs of E2EE

Pros:
	•	Strong privacy
	•	User trust

Cons:
	•	Harder moderation
	•	No server-side search
	•	Complex key management

⸻

When to Use E2EE
	•	Private messaging
	•	High-privacy products

Not always suitable for:
	•	Enterprise chat
	•	Moderated communities

Mentioning this trade-off shows senior judgment.

⸻

5️⃣ KEY MANAGEMENT (IF USING E2EE)

If E2EE is enabled:
	•	Each device has key pairs
	•	Keys are rotated
	•	Public keys are stored server-side
	•	Private keys never leave the device

This is complex and often out of scope for many products.

⸻

6️⃣ ABUSE PREVENTION (REAL-WORLD NECESSITY)

Chat systems attract abuse.

Common abuse vectors:
	•	Spam
	•	Harassment
	•	Scams
	•	Bots

⸻

Defense Layers

Abuse prevention is layered, not single-solution.

⸻

6.1️⃣ RATE LIMITING

Limit:
	•	Messages per second
	•	Connections per IP
	•	Group creation frequency

Rate limits exist at:
	•	API Gateway
	•	WebSocket layer

⸻

Example Limits
	•	5 messages / second
	•	50 messages / minute
	•	Burst allowed, sustained limited

These numbers are tunable.

⸻

6.2️⃣ SPAM DETECTION

Signals:
	•	Repeated messages
	•	Similar content
	•	Rapid sends
	•	New accounts

Actions:
	•	Throttling
	•	Shadow banning
	•	Temporary blocks

⸻

6.3️⃣ USER REPORTING

Users can:
	•	Report messages
	•	Report users

Reports feed into:
	•	Moderation queue
	•	Automated classifiers
	•	Human review

⸻

7️⃣ MODERATION SYSTEM

Moderation is both:
	•	Automated
	•	Manual

⸻

Automated Moderation
	•	Keyword filters
	•	ML classifiers
	•	URL scanning

⸻

Human Moderation
	•	Review flagged content
	•	Escalation flows
	•	Appeals process

This is often legally required.

⸻

8️⃣ MESSAGE DELETION & EDITING

Users expect:
	•	Delete for me
	•	Delete for everyone

⸻

Deletion Strategy

We rarely hard-delete immediately.

Instead:
	•	Soft delete
	•	Mark message as deleted
	•	Hide content in UI

Hard deletion may happen later via jobs.

⸻

Why Soft Delete?
	•	Auditing
	•	Abuse investigation
	•	Consistency across devices

⸻

9️⃣ AUDIT LOGS & COMPLIANCE

For enterprise or regulated environments:
	•	Log admin actions
	•	Log moderation decisions
	•	Log access to sensitive data

These logs are:
	•	Immutable
	•	Write-only
	•	Time-stamped

⸻

🔟 PROTECTING SYSTEM ITSELF

Now let’s protect the system.

⸻

DDoS Protection
	•	Rate limiting
	•	IP reputation
	•	CDN shielding

⸻

WebSocket Flood Protection
	•	Connection caps
	•	Idle timeouts
	•	Backpressure handling

⸻

1️⃣1️⃣ FAILURE SCENARIOS

⸻

Case 1: Token expires mid-session
	•	Server rejects messages
	•	Client refreshes token
	•	Session resumes

⸻

Case 2: Compromised account
	•	Tokens revoked
	•	Forced logout
	•	Audit review

⸻

1️⃣2️⃣ INTERVIEWER CHECKPOINT

At this stage I’d say:

“We’ve covered authentication, authorization, encryption, and abuse prevention.
Next, I’ll talk about scalability, sharding, and multi-region architecture, which ties everything together.”

⸻

📌 END OF PART 5

⸻

🔜 Coming in PART 6 (≈ 10–12 minutes):
	•	Database sharding
	•	Multi-region deployment
	•	Latency optimization
	•	Disaster recovery

Say:

👉 “Continue with Part 6”

and I’ll proceed.

Continuing seamlessly, same senior-level spoken interview tone, structured, whiteboard-friendly, no compression.

⸻

🎙️ DESIGN A CHAT APPLICATION — 45–60 MIN SPOKEN INTERVIEW

PART 6: SCALABILITY, SHARDING, MULTI-REGION & DISASTER RECOVERY (≈ 12–15 minutes)

Goal of this part:
Prove that the system can scale from thousands to hundreds of millions of users, survive failures, and stay fast globally.

⸻

👤 Interviewer

Okay. Everything sounds good so far.
How does this system scale, and how would you run it across multiple regions?

⸻

👤 Candidate (You)

This is where chat systems become truly distributed.
I’ll break this into five sections:
	1.	Scaling bottlenecks
	2.	Database sharding strategy
	3.	Multi-region deployment
	4.	Latency optimization
	5.	Disaster recovery & failover

⸻

1️⃣ IDENTIFYING SCALING BOTTLENECKS

Before scaling, we identify what grows fastest.

In chat systems, the biggest growth drivers are:
	•	Number of messages
	•	Concurrent connections
	•	Fan-out operations
	•	Storage size

CPU usually isn’t the first bottleneck.
I/O, network, and storage are.

⸻

2️⃣ DATABASE SHARDING STRATEGY

A single database cannot handle:
	•	Billions of messages
	•	Millions of writes per second

So we shard.

⸻

2.1️⃣ WHAT DO WE SHARD BY?

There are three common shard keys:
	1.	User ID
	2.	Conversation ID
	3.	Group ID

⸻

Why Conversation ID is Best

Chat messages belong to conversations.

Sharding by conversation_id ensures:
	•	Messages for a conversation are colocated
	•	Ordering is easy
	•	Writes are sequential

This is the most common industry choice.

⸻

Shard Key Example

shard_id = hash(conversation_id) % N

Each shard is:
	•	Independently scalable
	•	Replicated
	•	Isolated from others

⸻

3️⃣ HOT SHARD PROBLEM

Some conversations are much more active than others.

Example:
	•	Celebrity group
	•	Company-wide channel

This creates hot shards.

⸻

Mitigation Strategies
	•	Detect hot conversations
	•	Move them to dedicated shards
	•	Split conversation storage by time window
	•	Rate-limit excessively large groups

This is an operational concern, not just design.

⸻

4️⃣ SCALING WEBSOCKET SERVERS

WebSocket servers scale differently than APIs.

Challenges:
	•	Long-lived connections
	•	Memory per connection
	•	Context switching

⸻

Strategies
	•	Event-driven I/O (non-blocking)
	•	Connection pooling
	•	Horizontal scaling
	•	Region-local routing

Each server handles:
	•	Tens of thousands of connections
	•	Not millions

⸻

5️⃣ MULTI-REGION DEPLOYMENT

Now let’s go global.

Users expect:
	•	Low latency
	•	Fast message delivery
	•	Regional availability

⸻

Regional Architecture

We deploy:
	•	Full stack per region
	•	API servers
	•	WebSocket servers
	•	Cache
	•	Shared or replicated databases

Users connect to:
	•	Nearest region (geo-routing)

⸻

Read vs Write Locality

Typical strategy:
	•	Writes go to a primary region
	•	Reads served locally
	•	Async replication across regions

This ensures:
	•	Consistency
	•	Simplicity

⸻

6️⃣ DATA REPLICATION MODELS

We have two main options:

⸻

6.1️⃣ ACTIVE-PASSIVE
	•	One primary region
	•	Others are read-only
	•	Failover on outage

Pros:
	•	Simple
	•	Strong consistency

Cons:
	•	Higher latency for distant users

⸻

6.2️⃣ ACTIVE-ACTIVE (ADVANCED)
	•	Multiple regions accept writes
	•	Conflict resolution needed

Pros:
	•	Low latency everywhere
	•	High availability

Cons:
	•	Very complex
	•	Ordering conflicts
	•	Requires CRDTs or similar

Most interviews expect active-passive unless stated otherwise.

⸻

7️⃣ LATENCY OPTIMIZATION TECHNIQUES

Latency is felt most in:
	•	Message send
	•	Message receive
	•	Typing indicators

⸻

Optimization Techniques
	•	Regional WebSocket servers
	•	Edge caches for media
	•	Async replication
	•	Batching writes
	•	Efficient serialization

⸻

Important Insight

For chat:
	•	Consistency is more important than absolute latency
	•	A message arriving in wrong order is worse than arriving 100ms late

Mentioning this shows maturity.

⸻

8️⃣ DISASTER RECOVERY (DR)

Failures are not hypothetical.

We design for:
	•	Region outage
	•	Database corruption
	•	Network partition

⸻

DR Components
	•	Automated backups
	•	Point-in-time recovery
	•	Cross-region replication
	•	Failover playbooks

⸻

Backup Strategy
	•	Message data backed up periodically
	•	Metadata backed up more frequently
	•	Object storage is replicated automatically

⸻

9️⃣ FAILOVER FLOW

Let’s walk through a region failure.
	1.	Health checks fail
	2.	Traffic rerouted to secondary region
	3.	Clients reconnect
	4.	Presence rebuilt
	5.	Messages resynced

Downtime:
	•	Seconds to minutes
	•	Not hours

⸻

🔟 DATA CONSISTENCY DURING FAILOVER

Potential issues:
	•	Duplicate messages
	•	Missing messages

Mitigation:
	•	Idempotent writes
	•	Client-side deduplication
	•	Sequence numbers

Consistency always wins over speed during recovery.

⸻

1️⃣1️⃣ COST CONSIDERATIONS (VERY IMPORTANT)

Scaling costs money.

Big cost drivers:
	•	Storage
	•	Bandwidth
	•	WebSocket infrastructure
	•	Replication traffic

⸻

Cost Optimization
	•	Tiered storage (hot vs cold)
	•	Message retention policies
	•	Compression
	•	Media offloading to CDN

Senior engineers always mention cost.

⸻

1️⃣2️⃣ INTERVIEWER CHECKPOINT

At this point I’d say:

“We’ve now covered sharding, scaling, multi-region architecture, and disaster recovery.
To wrap up, I’ll talk about monitoring, observability, and trade-offs, and then summarize the system.”

⸻

📌 END OF PART 6

⸻

🔜 Coming in PART 7 (FINAL) (≈ 8–10 minutes):
	•	Monitoring & observability
	•	Metrics & alerts
	•	Trade-off recap
	•	Final system summary

Say:

👉 “Continue with Part 7”

and I’ll finish the interview cleanly.

Continuing seamlessly, same senior-level spoken interview tone, this is the final wrap-up section.

⸻

🎙️ DESIGN A CHAT APPLICATION — 45–60 MIN SPOKEN INTERVIEW

PART 7 (FINAL): OBSERVABILITY, TRADE-OFFS & SYSTEM SUMMARY (≈ 10–12 minutes)

Goal of this part:
Prove you can operate, debug, and reason about trade-offs like a senior/lead engineer—and close the interview confidently.

⸻

👤 Interviewer

Alright, before we wrap up—how would you monitor and operate this system in production?

⸻

👤 Candidate (You)

That’s a great question, because once a chat system is live, design doesn’t end at architecture—it continues through observability and operations.

I’ll structure this into four parts:
	1.	Metrics & monitoring
	2.	Logging & tracing
	3.	Alerting & incident response
	4.	Trade-off recap and final summary

⸻

1️⃣ METRICS: WHAT DO WE MEASURE?

In chat systems, metrics fall into three categories:
	1.	System health
	2.	User experience
	3.	Business impact

⸻

1.1️⃣ SYSTEM HEALTH METRICS

These tell us whether the system is alive and stable.

Key metrics:
	•	API latency (P50, P95, P99)
	•	WebSocket connection count
	•	Message publish success rate
	•	Fan-out job latency
	•	Database write/read latency
	•	Cache hit ratio

If any of these degrade, users feel it immediately.

⸻

1.2️⃣ REAL-TIME METRICS (VERY IMPORTANT)

Because chat is real-time, we must monitor:
	•	Message delivery delay
	•	Time from send → receive
	•	WebSocket reconnect rate
	•	Presence accuracy

For example:

“Messages delivered within 200ms”

This is a core SLO.

⸻

1.3️⃣ USER EXPERIENCE METRICS

These measure perceived quality.

Examples:
	•	Messages stuck in “sending”
	•	Failed uploads
	•	Reconnect frequency per user
	•	Client-side error rates

Often collected via:
	•	Client telemetry
	•	Frontend logging

Senior engineers always mention client signals—not just backend metrics.

⸻

2️⃣ LOGGING & DISTRIBUTED TRACING

Metrics tell us something is wrong.
Logs and traces tell us why.

⸻

2.1️⃣ STRUCTURED LOGGING

Every service logs:
	•	Request ID
	•	User ID (hashed)
	•	Conversation ID
	•	Operation type
	•	Outcome

This enables:
	•	Debugging specific user issues
	•	Correlating events across services

⸻

2.2️⃣ DISTRIBUTED TRACING

Because chat systems are multi-service:
	•	API Gateway
	•	Message Service
	•	Fan-out Service
	•	WebSocket Service

We propagate a trace ID across all services.

This lets us answer:

“Where did the delay happen?”

⸻

3️⃣ ALERTING & INCIDENT RESPONSE

Alerts must be:
	•	Actionable
	•	Not noisy
	•	Clearly owned

⸻

3.1️⃣ ALERT EXAMPLES

High-priority alerts:
	•	Message delivery success < 99.9%
	•	WebSocket disconnect spike
	•	Database write failures
	•	Fan-out backlog growth

Low-priority alerts:
	•	Slow background jobs
	•	Cache eviction anomalies

⸻

3.2️⃣ INCIDENT PLAYBOOKS

For each major alert, we define:
	•	What does this mean?
	•	Who responds?
	•	Immediate mitigation steps
	•	Long-term fix

This shows operational maturity.

⸻

4️⃣ COMMON FAILURE MODES & LEARNINGS

Let me briefly walk through a few common real-world failures.

⸻

Failure 1: Message Delivered Late

Possible causes:
	•	Fan-out lag
	•	WebSocket server overload
	•	Cache miss storm

Mitigation:
	•	Auto-scale workers
	•	Throttle non-critical events
	•	Degrade typing indicators

⸻

Failure 2: Presence Inaccuracy

Causes:
	•	Missed disconnects
	•	TTL misconfiguration

Mitigation:
	•	Shorter TTLs
	•	Heartbeat tuning
	•	Rebuild presence on reconnect

⸻

Failure 3: Duplicate Messages

Causes:
	•	Retries
	•	Network partitions

Mitigation:
	•	Idempotent writes
	•	Client-side deduplication

⸻

5️⃣ SYSTEM TRADE-OFF RECAP (VERY IMPORTANT)

This is where senior engineers shine.

⸻

Trade-off 1: Consistency vs Latency
	•	We prefer correct ordering over fastest delivery
	•	Slight delays are acceptable
	•	Incorrect ordering is not

⸻

Trade-off 2: Storage vs Performance
	•	Fan-out on write → fast reads, high storage
	•	Fan-out on read → efficient storage, heavier reads

We choose dynamically based on group size.

⸻

Trade-off 3: Privacy vs Features
	•	End-to-end encryption improves privacy
	•	But limits moderation and search

Decision depends on product goals.

⸻

Trade-off 4: Accuracy vs Cost
	•	Exact read receipts are expensive
	•	Cursor-based receipts are scalable

We choose scalability.

⸻

6️⃣ FINAL SYSTEM WALK-THROUGH (END-TO-END)

Let me quickly walk through the full flow one last time.

⸻

Sending a Message
	1.	Client sends message
	2.	Auth validated
	3.	Message persisted
	4.	Fan-out triggered
	5.	Online users get pushed
	6.	Offline users pull later

⸻

Receiving a Message
	1.	WebSocket push
	2.	Client deduplicates
	3.	Message rendered
	4.	Cursor updated

⸻

Failure Handling
	•	Retry on failure
	•	Reconnect on drop
	•	Resync on mismatch

⸻

7️⃣ HOW I WOULD CLOSE THE INTERVIEW

I’d end with something like this:

“To summarize, we designed a scalable, real-time chat system that handles messaging, presence, groups, media, security, and global scale.
We made conscious trade-offs around consistency, cost, and complexity, and designed the system to degrade gracefully under failure.”

Then I’d pause and ask:

“Happy to dive deeper into any specific area.”

That shows confidence and control.

⸻

📌 END OF PART 7 — COMPLETE INTERVIEW

⸻

✅ FINAL NOTES FOR YOU
	•	This script comfortably fills 45–60 minutes
	•	It mirrors real senior system-design interviews
	•	You can:
	•	Memorize structure
	•	Improvise details
	•	Whiteboard alongside it

If you want next:
	•	A pure whiteboard checklist
	•	A shortened 30-min version
	•	Or a mock interviewer grilling you harder

Just tell me.

