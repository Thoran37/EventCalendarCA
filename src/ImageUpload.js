import { useState } from 'react'

function ImageUpload() {
  let [image, setImage] = useState('')
  function handleImage(e) {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  return (

    <div>
      <input type="file" name='file' onChange={handleImage} /> <button>Submit</button>
    </div>
  )

}

export default ImageUpload;