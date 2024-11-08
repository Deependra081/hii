h=1973; m=0.511e6; e=3.795
n=600
A=eye(n,n)*(-2)
for i=1:n-1
 A(i,i+1)=1
 A(i+1,i)=1
end
r= linspace(1e-15,10,n)
d=r(2)-r(1)
X=((-h^2)/(2*m*d*d))*A
V=zeros(n,n)
for i=1:n
 V(i,i)=((-e*e)/r(i))
end
H=X+V
[U,E]=spec(H)
R1=U(:,2)
R2=U(:,3)
R3=abs(U(:,2).^2)
R4=abs(U(:,3).^2)
mprintf('Ground state energy %f eV,\n First excited state energy %f eV', E2(2,2),E3(3,3))
plot(r,R1,'r',r,R2,'g',r,R3,'b',r,R4,'y')
xlabel('r')
ylabel('wavefunction')
title('Ground state energy vs r')
legend('Ground state wavefunction','First excited state wavefunction','Probability density(First state)','Probability density(Ground state)')
