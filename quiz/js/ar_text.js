function aframeMutlByte(){
    document.querySelectorAll('[mb-text]:empty').forEach(mb_text=>{
        console.log(mb_text.dataset.text)
        const text  =mb_text.dataset.text
        const text_cnt = text.length
        const width = text_cnt*1.4
        const height= 1.6
        let cvs = document.createElement('canvas')
        let ctx = cvs.getContext('2d')
        cvs.width = width*100
        cvs.height = height*100
        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.font = '100pt Arial'
        ctx.fillText(text,0,125)

        const base64 = cvs.toDataURL("image/png")
        mb_text.innerHTML=`<a-image scale="${(width)/10} ${height/10} 1" src="${base64}"></a-image>`
    })
}
aframeMutlByte()