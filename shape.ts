abstract class Shape
{
    abstract Area():void;
}

class Polygon extends Shape
{
    public Area():void
    {
        console.log("Area of Polygon calculated");
    }
}

class Hexagon extends Shape
{
    public Area():void
    {
        console.log("Area of Hexagon calculated");
    }
}

class Rectangle extends Shape
{
    public Area():void
    {
        console.log("Area of Rectangle calculated");
    }
}

// let s = new Shape();     //ERROR


let s:Shape = new Polygon();      //pointer to base class can contain a derived class object
s.Area();       //call Area() of Polygon

s = new Hexagon();
s.Area();       //call Area() of Hexagon




let p = new Polygon();
let h = new Hexagon();
let r = new Rectangle();

CalculateArea(p);
CalculateArea(h);
CalculateArea(r);

function CalculateArea(s:Shape)
{
    s.Area();
}
