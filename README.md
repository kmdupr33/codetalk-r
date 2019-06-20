# codetalk

Creating technical presentations is more tedious than it should be. Most presentation tools were not designed specifically for programmers to create technical presentations. Codetalk is designed for exactly this, and it's a markdown-like dsl. It's designed to

* create line by line explanations of code
* make it easier to create and include technical diagrams in a presentation
* simplify the slide layout and theming process

The following code:

```
codetalk
  slide
    hello, world    
  end
end
```

Will generate a presentation with one slide that says, "hello, world"
