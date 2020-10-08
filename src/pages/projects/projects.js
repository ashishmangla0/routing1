import React from 'react';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid/Grid';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardTitle from '../../components/Card/CardTitle';
const  Projects = () => {
    return (
      <>
        <Layout  pageTitle="Projects Page">
  
              <Grid class="grid-12">
                  <div className="col-4">
                    <Card>
                    <CardTitle>
                      this is title
                    </CardTitle>
                        <CardBody>
                          this is from card body
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-4">
                    <Card>
                        <CardBody>
                          this is from card body
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-4">
                    <Card>
                        <CardBody>
                          this is from card body
                        </CardBody>
                    </Card>
                    </div>
              </Grid>
        </Layout>
      </>
    );
  }
  export default Projects