function init () {
  let nama = "juang"
  function tampilNama () {
    console.log(nama)
  }
  return tampilNama
}

let panggilNama = init()
panggilNama()