# Business Rules
---
A **Poll** is automatically created every begginning of the week.  
A **Poll** has *zero* or *many* **Choice**.  
An **User** can add *zero* or *many* **Choice** to a **Poll**.  
An **User** can vote for *one* or *many* **Choice** in a **Poll**.  

A **Poll** generate an **Event**.  
An **User** can participate in an **Event**.  
As *administrator*, an **User** can edit **Event**'s information.  
An **Event** has a **Forum**.  
> Need to define if a forum is a Entity.  

A **Forum** has *zero* or *many* **Topic**.  
A **Topic** has *zero* or *many* **Post**.  
An **User** can create *zero* or *many* **Topic**.  
An **User** can create *zero* or *many* **Post**.  

# Roles & permissions
---
+ **User**
  + Create a new Choice.
  + Vote for one or more choice(s).
  + Participate in an event.
  + Create a topic.
  + Create a post.
+ **Administrator**
  + Users right.
  + Edit event's information.