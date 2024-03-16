let imgTag = document.getElementById('image')
let src = imgTag.getAttributeNode('src')

src.value = 'https://imageio.forbes.com/specials-images/imageserve/65ebb371cae7ba33d7d0731a/An-M-55S-with-the-5th-Tank-Brigade-/0x0.jpg?format=jpg&crop=2047,1151,x0,y105,safe&width=1440'

imgTag.setAttributeNode(src)