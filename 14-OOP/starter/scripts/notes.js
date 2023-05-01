// JavaScript Object Oriented Programming 

// There are two main paradigms in JavaScript, functionak and OOP.

// Fundamental OOP Principles 
/*
Abstraction: Hiding implementation of a feature or detail, without requiring
that whatever is using the detail understands how the feature itself works. All 
that matters is that the output is correct, not how the output is created.

Encapsulation: Hiding certain properties and behaviors within a class. Only the 
neccessary components of the object are visible from outside. In some languages
this is used with private, public, and protected modifiers. 

Inheritance: Objects can inherit from parent objects to become more speciaized. 
Expansion of an object itself is less valuable than inheritance. Allows for the
reuse of basic class traits without repetition or modification of the parent.

Polymorphism: The ability for objects to respond to the same calls using 
customized and unique behaviors specialized to each object. Is performed with 
overriding of a parent's methods with a different method for the child.
*/

// JavaScript OOP Implementation 
/*
Instantiation: Creating an instance from a class.

Prototype: Instead of classes, JavaScript by default uses prototypes to define 
inheritance. Prototypes are objects which contains methods that are accessible 
to all objects linked to that prototype. Objects created from a prototype can 
access methods contained within that prototype. 

We assign a prototype to a constructor, and after all objects created by that 
constructor will have access to the prototypes methods. 

There are three ways of creating JavaScript objects. 

1. Constructor functions. 

2. ES6 Classes. 

3. Object.create()

Static methods in JavaScript belong to the constructor of the instance, not the 
instance or the prototype object, usually used to assist the constructor.
*/

// Constructor Functions and Prototypes
/*
Constructors are used to define the blueprint for an object, similar to how a 
class is used to blueprint an object in more conventional OOP. 

A constructor has a prototype property, which is the prototype object for all 
instances of that constructor, not the prototype of the constructor itself.

Constructors are called with the new keyword and go through four phases: 

1. A new blank object is created{}.

2. The constructor runs with this pointing to the blank object.

3. The blank object is connected to the constructor's prototype object. 

4. The newly filled out object is returned from the constructor. 

The instance object has the ability to use the prototype's properties and 
behaviors. The instance does not directly own these properties, but can use 
the ones defined by its prototype through the use of the this keyword. 

An instances prototype object is the same as the constructor's prototype field.
Prototypes also have access to the constructor function as a property. 

When an object tries to access one of its fields, it will search first inside 
its own properties. If it cannot find it, it will search for this property in 
the instance prototype next. This lets instances have access to the properties 
of their prototypes without having to add these properties to every instance. 

The link between instances and their prototypes is called the prototype chain. 
This chain links instance to prototypes. Prototypes themselves also have 
prototypes which they are linked to in the chain, which is the basic object 
prototype. This basic prototype is also the prototype for all object literals. 

Object literals use a built in constructor, which directly makes basic objects.

The prototype of basic object prototypes is null, indicating no prototype.

Behind the scenes, the logic for constructors is the same as ES6 classes.
*/

// ES6 Classes
/*
Classes are an alternative way of implementing OOP. They are an example of 
syntatic sugar - they do everything exactly the same way that prototypes do, 
but hide the implementation behind a new syntax that is easier for programmers
used to more conventional class based OOP design to understand.

Classes are technically a type of function, and as such can be written as 
expressions or statements, just like a function, but without arrow classes.

Classes are not hoisted. Even though a class declaration is a function 
declaration, and function declarations are hoisted, class declarations aren't. 

Classes are first class citizens, and then can be returned as variables. 

Classes are executed in strict mode, even if the rest of the script isn't.
*/

// Object.create()
/*
There is a third way of creating objects with Object.create().

This way does not use prototype inheritance or constructors. We can instead set 
the prototype to any other object we would like to. 

*/

// Protected and Private Fields
/*
JavaScript does not support truly private or protected data members. 

There are four main field modifiers for OOP:

1. Public fields: Fields accessible by anything. 

2. Private fields: Fields accessible only inside the class denoted with #. 

3. Protected fields: Fields accessible inside the class denoted with _.

4. Public methods: Methods accessible by anything.

5. Private methods: Methods accessible only inside the class denoted with #.

6. Protected methods: Methods accessible inside the class denoted with _.

In addition, we can use static public, protected, and private fields. These are 
only available on the class/constructor and not on the global space.

Public fields and methods have no additional modifier. 

Private fields and methods are denoted with #. 

Protected fields and methods are denoted with _.

Protected: We can denote a property with _ to indicate it is protected. We can 
use a getter or setter to access these data members instead of directly.

We can chain methods by just returning the object in the methods.
*/
