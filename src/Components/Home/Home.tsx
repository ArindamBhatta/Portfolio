import "./Home.css"
import {LinkedinOutlined,
        GithubOutlined, 
        UserOutlined,
        Html5Outlined,
        JavaScriptOutlined,
        ConsoleSqlOutlined,
        CodeOutlined,
        DatabaseOutlined 
      } from '@ant-design/icons'

import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="container">
      <div className="left-container">
          <div className="introduction">
            <h3>Hi, I'm Arindam Bhattacharyya</h3>
            <h3>Full Stack Web Developer</h3>
            <p>
              An enthusiastic Full Stack Web Developer With strong set of thechinical skills 
              and a dedication towards creating useful and interactive web applications
            </p>
          </div>

          <div className="connect-links">
            <div className="box">
                <div className="image-content">
                  <img 
                    src="https://res.cloudinary.com/dualndkhq/image/upload/v1710509431/h6hwdwgsjnvl1tgihj2m.jpg" 
                    alt="Image" 
                  /> 
                  <Link to = "/github" className="github-profile">
                    <UserOutlined style={{ fontSize: '30px' }} />
                  </Link>
                </div>
            </div>

            <div className="connection-logo">
              <Link to ="https://www.linkedin.com/in/-arindam-bhattacharyya/"
                target="_blank"
              >
              <LinkedinOutlined
                style={{ fontSize: '30px' }} 
              />
              </Link>
              
              <Link to ="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer">
                <GithubOutlined
                  style={{ fontSize: '30px' }} 
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="right-container-skill-box">
            <div className="title">
                <h1>Technical <span> Skills </span></h1>
              </div>

              <div className="body">
                <h5>Language</h5>
                <p>
                  <span
                      onClick={() => window.open("https://github.com/", "_blank")}
                      style={{ cursor: 'pointer' }}
                  >
                      <Html5Outlined
                          style={{ marginRight: '5px', transition: 'transform 0.3s' }}
                          className="hover-scale"
                      />
                  </span>
                       HTML 
                  <span className="percentage">Markdown</span>
                </p>

                <p>
                  <span
                      onClick={() => window.open("https://github.com/", "_blank")}
                      style={{ cursor: 'pointer' }}
                  >
                      <CodeOutlined
                          style={{ marginRight: '5px', transition: 'transform 0.3s' }}
                          className="hover-scale"
                      />
                  </span>
                  CSS
                  <span className="percentage"> SCSS, Tailwind CSS</span>
                </p>

                <p>
                  <span
                      onClick={() => window.open("https://github.com/", "_blank")}
                      style={{ cursor: 'pointer' }}
                  >
                      <JavaScriptOutlined
                          style={{ marginRight: '5px', transition: 'transform 0.3s' }}
                          className="hover-scale"
                      />
                  </span>
                  JavaScript
                  <span className="percentage"> Create a YouTube clone</span>
                </p>

                <p>
                  <span
                      onClick={() => window.open("https://github.com/", "_blank")}
                      style={{ cursor: 'pointer' }}
                  >
                      <CodeOutlined
                          style={{ marginRight: '5px', transition: 'transform 0.3s' }}
                          className="hover-scale"
                      />
                  </span>
                  TypeScript
                  <span className="percentage"> Clean architecture user login potral</span>
                </p>   

                <h5 className="line-anima">Client-Side Rendering </h5>
                    <p>
                    <span
                      onClick={() => window.open("https://github.com/", "_blank")}
                      style={{ cursor: 'pointer' }}
                    >
                      <CodeOutlined
                        style={{ marginRight: '5px', transition: 'transform 0.3s' }}
                        className="hover-scale"
                      />
                    </span>
                    React
                      <span className="percentage"> Job login potral </span>
                    </p> 
              <h5 className="line-anima">Server-Side Rendering </h5>
                <p>
                  <span
                      onClick={() => window.open("https://github.com/", "_blank")}
                      style={{ cursor: 'pointer' }}
                  >
                    <CodeOutlined
                        style={{ marginRight: '5px', transition: 'transform 0.3s' }}
                        className="hover-scale"
                      />
                  </span>
                  ExpressJs
                  <span className="percentage"> YouTube clone </span>
                </p> 
              <h5>Database </h5>  
                    <p> <ConsoleSqlOutlined /> PostgreSQL <span className="percentage">CRUD Operations</span></p>

                    <p>
                      <DatabaseOutlined />
                       Mongo-Db <span className="percentage">CRUD Operations</span>
                    </p>
              </div>
        </div>
    </div> 
  )
}
