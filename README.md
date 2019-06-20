# codetalk

Creating technical presentations is more tedious than it should be. This is because most presentation tools were not designed specifically for programmers to create technical presentations. Even when tools are designed for this, they are often underpowered because they are merely markup languages that don't allow for abstraction and/or they borrow their design principles from tools that aren't for programmers.

Codetalk is an attempt to solve this problem; it's an answer to the question, "If programmers designed their own tool for creating technical presentations from the ground up, what would they create?" It's designed to

* create line by line explanations of code
* make it easier to create and include technical diagrams in a presentation
* simplify the slide layout and theming process

The following code:

```
codetalk
  slide
    # CodeTalk
    ## A better way to talk about code
    Creating technical presentations doesn't *have* to be tedious.
  end
end
```

Will generate a presentation that looks like this:

# CodeTalk
## A better way to talk about code
Creating technical presentations doesn't *have* to be tedious.
