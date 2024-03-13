const input = require("readline-sync");
let a = input.questionInt("number A:- ");
let b = input.questionInt("number B:- ");
let c = input.questionInt("number C:- ");
let d = input.questionInt("number :- ");
if (a>b)
{
  l = a;
  s = b;
} 
else
{
    l = b;
    s = a;
}
if(c>d)
{
    l1 = c;
    s1 = d;
}
else
{
    l1 = d;
    s1 = c;
}
if(l>l1)
{
    l2 = l;
    s2 = l1;
}
else
{
    l2 = l1;
    s2 = l;
}
if(s<s1)
{
    l3 = s1;
    s3 = s;
}
else
{
    l3 = s;
    s3 = s1;
}
if(s2<s3)
{
    console.log(s3);
}
else
{
    console.log(s2);
}