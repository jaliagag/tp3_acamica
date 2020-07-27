// Fibonacci Test

// número máximo al que quiero llegar

n = 76//000000

let fibonacci = () => {
	
	for(i = 1; i < n; i++) {
		let c = 1;
		let d = c+c;
		let e = d+c;
		let f = d+e;
		let g = e+f;
		let h = f+g;
		let j = g+h;
		let k = h+i;
		let l = i+j;
		let m = j+k;
		let n = k+l;
		let o = l+m;

		console.log(d);
		console.log(e);
		console.log(f);
		console.log(g);
		console.log(h);
		console.log(i);
		console.log(j);
		console.log(k);
		console.log(l);
		console.log(m);
		console.log(o);

		
		

	}
};

fibonacci();