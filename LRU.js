// 3. Design LRU (Static + Dynamic Input Flow)
// Question: Design a least Recently Used (LRU) Cache with;

// Static inputs (fixed capacity).
// Daynamic inputs (Capacity can change at runtimes). Extend the design for LFU with minimal changes.

class LRUCache {
  constructor(capicty){
   this.capicty = capicty;
   this.cache = new Map();
  }

  get(key){
    if(!this.cache.has(key)) return -1;
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key,value);
    return value;
  }
  put(key,value){
    if(this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.capicty) this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key,value);  
  }
}


// Test case

let lru = new LRUCache(2) 
lru.put(1,1);
lru.put(2,2);

console.log(lru.get(1));


lru.put(3,3);
console.log(lru.get(2));