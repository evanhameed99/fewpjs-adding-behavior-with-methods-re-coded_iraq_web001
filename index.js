// Your code here
class Cat {
  constructors (name,sex){
    this.name = name;
    this.sex=sex;
  }
  speak(){
    return `${this.name} says meow!`
  }
}
cat.speak();
class Dog {
  constructors (name,sex){
    this.name = name;
    this.sex=sex;
  }
  speak(){
    return `${this.name} says woof!`
  }

}
class Bird {
  constructors (name,sex){
    this.name = name;
    this.sex=sex;
  }
  speak(){
    if(this.sex === 'male'){
      return `It's me! ${this.name}`
    }else{
      return `${this.name} says squawk!`
    }
  }

}
