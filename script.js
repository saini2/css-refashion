const element = document.querySelectorAll('.controls input');
element.forEach(item => item.addEventListener('change',handleChange));
element.forEach(item => item.addEventListener('mousemove',handleChange));

function handleChange (){
    const datatype = this.dataset.sizing || '';
    console.log(this.value)
    document.documentElement.style.setProperty(`--${this.name}`,this.value + datatype);
}