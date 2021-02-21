import React from "react"
import UseInstagram from "../hooks/use-instagram"
import Img from "gatsby-image"

const Insta = () => {
  const instaPhotos = UseInstagram()
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 grid-flow-row w-full">
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}`}
            className=" w-full"
            target="_blank"
            rel="noreferrer"
          >
            <Img fluid={photo.fluid} className="w-full h-full object-cover" />
          </a>
        ))}
        <p className="my-4 col-start-1 col-end-3">
          This photos from my twin acc, mine is private.
        </p>
      </div>
    </>
  )
}

export default Insta
