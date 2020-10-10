import React from 'react';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid/Grid';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardTitle from '../../components/Card/CardTitle';
import Search from '../../components/Search/Search';
import { Link } from 'react-router-dom';
const  Projects = ({ match }) => {
    return (
      <>
        <Layout  pageTitle="Projects Page">
        <Grid>
        <div className="page-top">
          <Link to="/projects/addproject/" className="button">Add New Project</Link>
          <div className="page-top__results">
          Showing 1 to 10 of 150 entries
          </div>
          <div className="page-top__serach">
            <Search/>
          </div>
        </div>
        <Grid class="grid-12">
                  <div className="col-4">
                    <Card>
                    <CardTitle>
                      Project 1
                    </CardTitle>
                        <CardBody>
                          Project 1 description
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-4">
                    <Card>
                    <CardTitle>
                      Project 2
                    </CardTitle>
                        <CardBody>
                          Project 2 description
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-4">
                    <Card>
                    <CardTitle>
                      Project 3
                    </CardTitle>
                        <CardBody>
                          Project 3 description
                        </CardBody>
                    </Card>
                    </div>
              </Grid>
        </Grid>
        </Layout>
      </>
    );
  }
  export default Projects