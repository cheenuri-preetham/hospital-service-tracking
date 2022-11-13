import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// components

//  import CardHospital from "components/Cards/CardHospital.js";

// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-2 px-4 ">
          <Card style={{ width: '30rem', padding: '10px' }}>
            <Card.Img variant="top" src="https://cdn.yashodahospitals.com/wp-content/uploads/yashoda_hitech_city.jpg" width={100} height={100}/>
            <Card.Body>
              <Card.Title>Yashoda hospitals</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <br/>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-2 px-4">
          <Card style={{ width: '30rem', padding: '10px' }}>
            <Card.Img variant="top" src="https://kims-app-server.s3.ap-south-1.amazonaws.com/images/editor/home-img-1576160114-1-1-1_1578669806.png" style={{width :'800px', height:'300px'} }/>
            <Card.Body>
              <Card.Title>Kims hospitals</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div className="w-full xl:w-6/12 mb-12 xl:mb-2 px-4">
          <Card style={{ width: '30rem', padding: '10px' }}>
            <Card.Img variant="top" src="https://apollocbcc.com/wp-content/uploads/2015/04/apollo-ahmedabad.jpg" style={{ width: '800px', height: '300px' }} />
            <Card.Body>
              <Card.Title>apollo hospitals</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <Card style={{ width: '30rem', padding: '10px' }}>
            <Card.Img variant="top" src="https://telanganatoday.com/wp-content/uploads/2022/07/Gandhi-Hospital-831x450-1.jpg" style={{ width: '800px', height: '300px' }} />
            <Card.Body>
              <Card.Title>Gandhi hospital</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>


      {/* {/* </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div> */}
        {/* <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardHospital />
        </div> */}
      </div> 
    </>
  );
}
