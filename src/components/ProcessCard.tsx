import { Minus, Plus } from "lucide-react"
import { useState } from "react";

interface ProcessProps {
  data: {
    id: number,
    title: string,
    description: string,
  }
}

const ProcessCard = ({ data }: ProcessProps) => {
  const [show, setShow] = useState(false);

  const showDes = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  return (
    <div className={`service-card transition-transform duration-700 lg:px-16 ${!show ? "bg-gray" : "bg-green"}`}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <h1>0{data.id}</h1>
          <h3>{data.title}</h3>
        </div>

        {!show ? (
          <Plus className="border rounded-full w-10 h-10 bg-gray p-2" onClick={showDes} />
        ) : (
          <Minus className="border rounded-full w-10 h-10 bg-gray p-2" onClick={showDes} />
        )}
      </div>

      {!show ? (
        ""
      ) : (
        <div className="flex flex-col gap-3">
          <div className="w-full h-[1px] bg-dark mt-3" />
          <p>{data.description}</p>
        </div>
      )}
    </div>
  )
}

export default ProcessCard