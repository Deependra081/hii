h=197.3; m=940; k=100
n=750;b=[0 10 30];
A=eye(n,n)*(-2)
for i=1:n-1
 A(i,i+1)=1
 A(i+1,i)=1
end
r= linspace(1e-15,10,n)
d=r(2)-r(1)
X=((-h^2)/(2*m*d*d))*A
V=[zeros(n,n) zeros(n,n) zeros(n,n)]
for i=1:n
 V1(i,i)=(1/2)*(k*r(i)*r(i))+1/3*(b(1)*r(i)*r(i)*r(i))
 V2(i,i)=(1/2)*(k*r(i)*r(i))+1/3*(b(2)*r(i)*r(i)*r(i))
 V3(i,i)=(1/2)*(k*r(i)*r(i))+1/3*(b(3)*r(i)*r(i)*r(i))
end
H1=X+V1
[U1,E1]=spec(H1)
R1=(U1(:,2))
H2=X+V2
[U2,E2]=spec(H2)
R2=(U2(:,2))
H3=X+V3
[U3,E3]=spec(H3)
R3=(U3(:,2))
mprintf('\n ground state %f MeV,\n first excited state %f MeV,\n ground state %f MeV,\n first excited state %f MeV,\n ground state %f MeV,\n first excited state %f MeV',E1(1,1),E1(2,2),E2(1,1),E2(2,2),E3(1,1),E3(2,2))
plot(r,R1,'r',r,R2,'g',r,R3,'b')
title('GROUND STATE ENERGY VS r')
xlabel("r")
ylabel("Wavefunction")
legend('b=0Å','b=10Å','b=30Å')
