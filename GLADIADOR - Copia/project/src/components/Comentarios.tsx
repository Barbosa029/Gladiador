import { motion } from "motion/react"

import Img1 from "../assets/comentarios/01.jpg";
import Img2 from "../assets/comentarios/02.jpg";
import Img3 from "../assets/comentarios/03.jpg";
import Img4 from "../assets/comentarios/04.jpg";
import Img5 from "../assets/comentarios/05.jpg";
import Img6 from "../assets/comentarios/06.jpg";
import Img7 from "../assets/comentarios/07.jpg";
import Img8 from "../assets/comentarios/08.jpg";
import Img9 from "../assets/comentarios/09.jpg";

export default function Comentarios() {
  return (
    <section className="bg-gray-900 py-8 px-8">
      <div className="text-center mt-16">
        <h3 className="text-5xl font-bold text-white mb-4">
          O que nossos alunos estão falando
        </h3>
      </div>

      <div className="flex gap-3 items-start container mx-auto max-w-6xl h-fit mb-32">
        <div className="flex-1 flex flex-col gap-3">
          <><motion.img
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2.5 }}

            src={Img4}

            className="w-full h-auto rounded-lg md:hidden shadow-md"
          />
            <motion.img
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 2.5 }}

              src={Img5}

              className="w-full h-auto rounded-lg md:hidden shadow-md"
            />
            <motion.img
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 2.5 }}

              src={Img6}

              className="w-full h-auto rounded-lg shadow-md md:hidden"
            />
            {[Img1, Img2, Img3, Img9].map((imgs, idx) => (
              <>
                <motion.img
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 2.5 }}
                  key={idx}
                  src={imgs}
                  alt={`Comentário ${idx + 1}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </>
            ))}</>
        </div>
        <div className="flex-1 flex-col gap-3 hidden md:flex">
          {[Img4, Img5, Img6].map((img, idx) => (
            <motion.img
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 2.5 }}
              key={idx}
              src={img}
              alt={`Comentário ${idx + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          ))}
        </div>
        <div className="flex-1 flex-col gap-3 hidden md:flex">
          {[Img7, Img8].map((img, idx) => (
            <motion.img
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 2.5 }}
              key={idx}
              src={img}
              alt={`Comentário ${idx + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          ))}
        </div>
      </div >
    </section >
  );
}