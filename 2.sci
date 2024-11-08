h=1973;m=0.511e6;e=3.795
n=750
A=eye(n,n)*(-2)
for i=1:n-1
    A(i,i+1)=1
    A(i+1,i)=1
end
p=linspace(1e-15,10,n)
d=p(2)-p(1)
X=((-h^2)/(2*m*d*d))*A
disp('enter the value of screenlenghs in angstrom(ex 3 5 7);')
for j=1:3
    a(j)=input('')
end
V=[zeros(n,n) zeros(n,n) zeros(n,n)]
for i=1:n
V1(i,i)=((-e*e)/p(i))*exp(-p(i)/a(1))
V2(i,i)=((-e*e)/p(i))*exp(-p(i)/a(2))
V3(i,i)=((-e*e)/p(i))*exp(-p(i)/a(3))
end
//for a=3
H1=X+V1
[U1,E1]=spec(H1)
//for a=5
H2=X+V2
[U2,E2]=spec(H2)
//for a=7
H3=X+V3
[U3,E3]=spec(H3)
mprintf('\n For screenlength a=3(Å).The ground state energy %f eV ,\n For screenlength a=5(Å).The ground state energy %f eV,\n For screenlength a=7(Å).The ground state energy %f eV',E1(2,2),E2(2,2),E3(3,3))
for i=10:n
    Q1(i)=((-e*e)/p(i))*exp(-p(i)/a(1))
    Q2(i)=((-e*e)/p(i))*exp(-p(i)/a(2))
    Q3(i)=((-e*e)/p(i))*exp(-p(i)/a(3))
end
plot(p,Q1,'r',p,Q2,'g',p,Q3,'b')
title('Screened coulomb potential')
xlabel('Radial distance, r')
ylabel('Screened coulomb potential (ev)')
legend('for a=3 Å','for a=5 Å','for a=7 Å')
