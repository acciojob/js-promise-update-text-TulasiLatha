//your JS code here. If required.
function helloworld(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
		reslove("Hello, world!")
	},1000)})
}

helloworld().then((message)=>{
	const ouputElemnt=document.getElementById('output');
	ouputElemnt.innerText=message;
});