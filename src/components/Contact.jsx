import { Calendar, Mail, MapPin, Phone} from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
  const contactItems = [
      {
        icon: Mail,
        title: 'Email',
        value: 'pavneetbomrah @gmail.com',
        href: 'mailto:pavneetbomrah@gmail.com'
      },
      {
        icon: Phone,
        title: 'Phone',
        value: '+91 9818932172',
        href: 'tel:+919818932172'
      },
      {
        icon: MapPin,
        title: 'Location',
        value: 'Delhi, India',
        href: 'https://maps.google.com/?q=Delhi,India'
      },
      {
        icon: Calendar,
        title: 'Birthday',
        value: 'Feb 15, 2007',
        href: 'https://maps.google.com/?q=Delhi,India'
      }
    ];
  return (
    <div>
      <div className="max-xl:columns-2">
        {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group py-2"
                >
                  <div className="text-[var(--orange-yellow-crayola)] p-2 bg-[var(--jet)] rounded-lg group-hover:bg-[var(--orange-yellow-crayola)] group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-white text-md">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </motion.a>
              ))}
      </div>
    </div>
  )
}

export default Contact