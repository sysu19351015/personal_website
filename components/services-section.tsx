import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Web design",
      description: "Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.",
      image: "/images/web-design.svg",
    },
    {
      title: "UI/UX design",
      description: "Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "Product design",
      description: "Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.",
      image: "/images/product-design.svg",
    },
    {
      title: "User research",
      description: "Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.",
      image: "/images/user-research.svg",
    },
    {
      title: "Motion graphics",
      description: "Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.",
      image: "/images/motion-graphics.svg",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My broad <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set of services</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices
              nulla sed doler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={328}
                    className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Get in touch</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Looking for another service? Get in touch with me, there is a high chance that I will be able to help!
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]">
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
