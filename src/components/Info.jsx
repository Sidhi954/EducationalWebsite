import React from 'react'
import Card from './Card';
import Sdata from './Sdata'

const Info = (val) => {
    
  return (
    <>
        <h1 >Study Materials</h1>
        <Card
          imgsrc={Sdata[0].imgsrc}
          title={Sdata[0].title}
          sname={Sdata[0].sname}
          link={Sdata[0].link}
        />
        <Card
          imgsrc={Sdata[1].imgsrc}
          title={Sdata[1].title}
          sname={Sdata[1].sname}
          link={Sdata[1].link}
        />
        <Card
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          sname={Sdata[2].sname}
          link={Sdata[2].link}
        />
        <Card
          imgsrc={Sdata[3].imgsrc}
          title={Sdata[3].title}
          sname={Sdata[3].sname}
          link={Sdata[3].link}
        /><Card
          imgsrc={Sdata[4].imgsrc}
          title={Sdata[4].title}
          sname={Sdata[4].sname}
          link={Sdata[4].link}
        />
        <Card
          imgsrc={Sdata[5].imgsrc}
          title={Sdata[5].title}
          sname={Sdata[5].sname}
          link={Sdata[5].link}
        />
        <Card
          imgsrc={Sdata[6].imgsrc}
          title={Sdata[6].title}
          sname={Sdata[6].sname}
          link={Sdata[6].link}
        />
        <Card
          imgsrc={Sdata[7].imgsrc}
          title={Sdata[7].title}
          sname={Sdata[7].sname}
          link={Sdata[7].link}
        />
        <Card
          imgsrc={Sdata[8].imgsrc}
          title={Sdata[8].title}
          sname={Sdata[8].sname}
          link={Sdata[8].link}
        />
    </>
  )
}

export default Info
