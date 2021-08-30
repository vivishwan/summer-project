import React from 'react'
import TableauContainer from '../../components/Tableau/TableauContainer'

const Home = () => {
  const data = {
    topLeft: {
      title: "Lorem ipsum dolor sit amet.",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. architecto ducimus aliquid, asperiores voluptas a fugiat provident, ad corporis laudantium illum aperiam. Sed odit repellendus deleniti exercitationem, sint quibusdam veniam. Optio, a voluptatem nulla hic voluptatibus velit ut error quam aspernatur exercitationem beatae repudiandae dolor asperiores et, dolore ea optio amet! In, dignissimos. Explicabo id alias quo, possimus ab sapiente!",
      uri: "centre_count/CentreCountofeachWard"
    },
    topRight: {
      title: "Lorem ipsum dolor sit amet.",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. quis exercitationem corporis tempore blanditiis placeat reprehenderit quisquam dolorum! Tenetur illo eum, a voluptatem nulla hic voluptatibus velit ut error quam aspernatur exercitationem beatae repudiandae dolor asperiores et, dolore ea optio amet! In, dignissimos. Explicabo id alias quo, possimus ab sapiente!",
      uri: "total_doses/Ward-WiseTotalDoses"
    },
    bottom: {
      title: "Lorem ipsum dolor sit amet.",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic perspiciatis alias in vel dolore natus magni, quae distinctio quidem perferendis accusamus placeat magnam architecto ducimus aliquid, asperiores voluptas a fugiat provident, ad corporis laudantium illum aperiam. Sed odit repellendus deleniti exercitationem, sint quibusdam veniam. Optio, aspernatur ipsum magni dignissimos atque aliquid animi nihil quos ratione ea numquam, laboriosam, quis exercitationem corporis tempore blanditiis placeat reprehenderit quisquam dolorum! Tenetur illo eum, a voluptatem nulla hic voluptatibus velit ut error quam aspernatur exercitationem beatae repudiandae dolor asperiores et, dolore ea optio amet! In, dignissimos. Explicabo id alias quo, possimus ab sapiente!",
      uri: "Book1_16274472269420/AllCentresMap"
    }
  }
  return <TableauContainer data={data} />
}

export default Home
