class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
export class UploadImage {
  processFile(imageInput: any): Promise<ImageSnippet> {
    return new Promise((res, rej) => {
      const file: File = imageInput.files[0]
      const reader = new FileReader()
      let selectedFile
      reader.addEventListener("load", (event: any) => {
        selectedFile = new ImageSnippet(event.target.result, file)
        res(selectedFile)
      })
      reader.readAsDataURL(file)
    })
  }
}
