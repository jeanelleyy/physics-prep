
var Equation=function(eqname,vars,empty,category,note){
	this.eqname=eqname;
	this.vars=vars;
	this.empty=empty;
	this.category=category;
	this.note="("+note+")";
	if(this.note==="("+undefined+")"){
		this.note="";
	}
	eqList.push(this);

	this.add=function(){
		var addeq=document.createElement("p");
		addeq.id="eq"+(eqList.indexOf(this)+1);
		addeq.innerHTML="<u>"+this.eqname+"</u>: `"+this.vars+"`<i> &emsp;"+this.note+"</i>";
		document.getElementById(this.category).appendChild(addeq);
	}
}

var Constant=function(cname,constant){
	this.cname=cname;
	this.constant=constant;
	cList.push(this);

	this.add=function(){
		var addc=document.createElement("p");
		addc.id="c"+(cList.indexOf(this)+1);
		addc.innerHTML="<u>"+this.cname+"</u>: `"+this.constant+"`";
		document.getElementById("ctext").appendChild(addc);
	}
}


var eqList=[];
var cList=[];

var eq1= new Equation("Newton's Second Law","F=ma","[]=[][]","mechanics","Force is ma");
var eq2= new Equation("Basic Velocity","v=d/t","[]=[]//[]","mechanics");
var eq3= new Equation("Big Five #1","Deltas=(v-v_0)t","Delta[]=([]-[])[]","mechanics");
var eq4= new Equation("Big Five #2","Deltas=v_0t+1/2at ^2","Delta[]=[][]+1/2[][]^2","mechanics");
var eq5= new Equation("Big Five #3","Deltas=vt-1/2at^2","Delta[]=[][]-1/2[][]^2","mechanics");
var eq6= new Equation("Big Five #4","v=v_0+at","[]=[]+[][]","mechanics");
var eq7= new Equation("Big Five #5","v^2=v_0^2+2aDeltas","[]^2=[]^2+2[]Delta[]","mechanics");
var eq8= new Equation("Momentum","p=mv","[]=[][]","mechanics");
var eq9= new Equation("Kinetic Energy","KE=1/2mv^2","[]=1/2[][]^2","mechanics");
var eq10= new Equation("Basic Work","W=FDeltas","[]=[]Delta[]","mechanics");
var eq11= new Equation("Work","W=Fscostheta","[]=[][]cos[]","mechanics");
var eq12= new Equation("Work with weight","W=(mg)h","[]=([][])[]","mechanics");
var eq13= new Equation("Work-Energy Theorem","W=DeltaKE","[]=Delta[]","mechanics", "#WOKE");
var eq14= new Equation("Work with Friction","W=muNs","[]=[][][]","mechanics");
var eq15= new Equation("Power","P=W/t","[]=[]//[]","mechanics");
var eq16= new Equation("Centripetal Force","F_c=mv^2/r","[]=[][]^2//[]","mechanics");
var eq17= new Equation("Centripetal Acceleration","a_c=v^2/r","[]=[]^2//[]","mechanics");
var eq18= new Equation("Torque","T=F_(_|_)r","[]=[][]","mechanics");
var eq19= new Equation("Angular Momentum","L=mvr","[]=[][][]","mechanics");
var eq20= new Equation("Hooke's Law","F_(spri ng)=-kx","[]=-[][]","mechanics","Fkx `~~` fix");
var eq21= new Equation("Projectile X Position","Deltax=v_(0x)t","Delta[]=[][]","mechanics");
var eq22= new Equation("Couloumb's Law","F=k(q_1q_2)/r^2","[]=[]([][])/[]^2","electricity");
var eq23= new Equation("Wave Velocity","v=lambdaf","[]=[][]","waves");
var eq24= new Equation("Electric Power","P=IV","[]=[][]","electricity","VIP status");
var eq25= new Equation("Static Friction","mu_x=f_s/N","[]=[]//[]","mechanics", "FUN");
var eq26= new Equation("Kinetic Friction","mu_x=f_k/N","[]=[]//[]","mechanics", "FUN");
var eq27= new Equation("Ohm's Law","V=IR","[]=[][]","electricity","vir=to go");
var eq28= new Equation("Force with Momentum","F=(Deltap)/(Deltat)","[]=(Delta[])//(Delta[])","mechanics");
var eq29= new Equation("Acceleration","a=(Deltav)/(Deltat)","[]=(Delta[])/(Delta[])","mechanics","vat of acceleration");
var eq30= new Equation("Impulse","J=FDeltat=Deltap","[]=Delta[]","mechanics");
var eq31= new Equation("Conservation of Kinetic Energy","KE_1+KE_2=KE_1^'+KE_2^'","[]+[]=[]^'+[]^'","mechanics");
var eq32= new Equation("Center of Mass","(m_1x_1+m_2x_2+...+m_n+x_n)/M","([][]+[][]+...+[][])//[]","mechanics");
var eq33= new Equation("Kelvin-Celsius","K=C+273","[]=[]+[]","heat");
var eq34= new Equation("Specific Heat","Q=mcDeltaT","[]=[][]Delta[]","heat");
var eq35= new Equation("Phase Change","Q=mL","[]=[][]","heat");
var eq36= new Equation("Linear Expansion","DeltaL=alphaL_0DeltaT","Delta[]=[][]Delta[]","heat", "Look! A loot!");
var eq37= new Equation("Volume Expansion","DeltaV=betaV_0DeltaT","Delta[]=[][]Delta[]","heat", "BVOOT BVOOT");
var eq38= new Equation("Alpha-Beta","beta=3alpha","[]=3[]","heat");
var eq39= new Equation("Pressure","P=F/A","[]=[]//[]","heat");
var eq40= new Equation("Average Translational Kinetic Energy","K_(avg)=3/2k_BT","[]=3/2[][]","heat");
var eq41= new Equation("Ideal Gas Law","PV=nRT","[][]=[][][]","heat","There's a Nugget in the PerVeRT");
var eq42= new Equation("Root-mean-square Speed","v_(rms)=sqrt((3RT)/m)","[]=sqrt((3[][])//[])","heat");
var eq43= new Equation("First Law of Thermodynamics","DeltaU=Q-W","Delta[]=[]-[]","heat", "Baby said,'UnQWl!' Isn't that cute? (Work done BY system: You're negative? BYe Felicia!)");
var eq44= new Equation("Work with Gas","W=PDeltaV","[]=[]Delta[]","heat", "Women's Point of View");
var eq45= new Equation("Thermal Efficiency","e=(Q_h+Q_c)/Q_h","[]=([]+[])//[]","heat");
var eq46= new Equation("Carnot Cycle","e=(T_h+T_c)/T_h","[]=([]+[])//[]","heat");
var eq47= new Equation("Frequency of Oscillations","f=1/(2pi)sqrt(k/m)","[]=1/([][])sqrt([]//[])","mechanics");
var eq48= new Equation("Period of Oscillations","T=2pisqrt(m/k)","[]=[][]sqrt([]//[])","mechanics");
var eq49= new Equation("Elastic Potential","U_s=1/2kx^2","[]=1/2[][]^2","mechanics");
var eq50= new Equation("Maximum Oscillation Velocity","v_(max)=2pifA","[]=[][][][]","mechanics");
var eq51= new Equation("Displacement of Oscillations","x=Acos(2pift+phi)","[]=[]cos([][][][]+[])","mechanics");
var eq52= new Equation("Oscillation Velocity at a Point","v=+-2pifsqrt(A^2-x^2)","[]=+-[][][]sqrt([]^2-[]^2)","mechanics");
var eq53= new Equation("Vertical Equilibrium of Springs","kd=mg","[][]=[][]","mechanics","mega kid");
var eq54= new Equation("Vertical Spring Force","F=k(d+y)-mg","[]=[]([]+[])-[][]","mechanics","The f&$k you doing?! *pause* imig");
var eq55= new Equation("Restoring Pendulum Force","F_(rest o ri ng)=mgsintheta","[]=[][]sin[]","mechanics");
var eq56= new Equation("Pendulum Frequency","f=1/2pisqrt(g/L)","[]=1/2[]sqrt([]//[])","mechanics");
var eq57= new Equation("Pendulum Period","T=2pisqrt(L/g)","[]=[][]sqrt([]//[])","mechanics");
//var eq58= new Equation();
//var eq59= new Equation();


var c1= new Constant("Gravitational Acceleration","g=9.8m/(s^2)");
var c2= new Constant("Avogadro's Number","N_A=6.022*10^23 mol^-1");
var c3= new Constant("Gas Constant","R=8.312 J/(mol*K)");
var c4= new Constant("Boltzmann Constant","k_B=R/N_A=1.38064852*10^(-23) J*K^-1");





//calls add function on every object in the list
for(var i=0;i<eqList.length;i++){
	eqList[i].add();
}

for(var i=0;i<cList.length;i++){
	cList[i].add();
}

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});

