var wh=()=>{
    window.onresize=()=>{
        let h= window.innerHeight;
        console.log(h)
        return h + 'px';
    }
}
export default wh;