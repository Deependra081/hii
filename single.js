const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const welcomeVideoModal = document.getElementById('welcomeVideoModal');
  const welcomeVideo = document.getElementById('welcomeVideo');

  if (!localStorage.getItem('welcomeVideoShown')) {
    welcomeVideoModal.style.display = 'flex';
    welcomeVideo.play();

    welcomeVideo.onended = () => {
      welcomeVideoModal.style.display = 'none';
      localStorage.setItem('welcomeVideoShown', 'true');
    };
  } else {
    welcomeVideoModal.style.display = 'none';
  }
});

// Detect screenshot (not foolproof)
if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
  window.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.body.style.display = 'none';
    } else {
      document.body.style.display = 'block';
    }
  });
}
        document.addEventListener('contextmenu', (e) => e.preventDefault());
function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				  <div id="content">
        <div class="page">
            <div class="content">
              <h2>Welcome again</h2>
            </div>
        
            <div class="recent">
              <h3>Recent uploads</h3>
              <ul>
                <li><a href="Week1.html">week 1</a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <a class="more-button" href="#" onclick=
					"changeContent('week1')">
						Week 1
					</a>
              </ul>
            </div>
          </div>
    </div>`;
			break;
		case 'week1':
			contentDiv.innerHTML = `
				<main>
        <div class="page">
            <div class="content">
                <div class="container">
                <table>
                    <tr>
                        <td><a class="toggle-btn" href="#quiz-week1">Week 1: Assignment 1</a></td>
                    </tr>
                    <div>
                    <tr>
                        <td><a class="toggle-btn" href="#intro-plasma">Introduction to Plasma</a></td>
                    </tr>
                    <tr>
                        <td><a class="toggle-btn" href="#intro-plasma-ii">Introduction to Plasma -II</a></td>
                    </tr>
                    <tr>
                        <td><a class="toggle-btn" href="#plasma-oscillations">Plasma Oscillations</a></td>
                    </tr>
                    <tr>
                        <td><a class="toggle-btn" href="#debye-shielding">Debye Shielding</a></td>
                    </tr>
                    <tr>
                        <td><a class="toggle-btn" href="#debye-potential">Debye Potential</a></td>
                    </tr>
                </table>
            </div>
                <div id="intro-plasma" class="container">
                
                    <h2>Introduction to Plasma</h2>
                    <p>The instructor begins by defining plasma as the fourth state of matter. He explains that matter can exist in three states: solid, liquid, and gas. In a solid, the particles are tightly packed together. In a liquid, the particles are loosely bound and move randomly. In a gas, the particles are even more loosely bound and move freely. The instructor then explains that plasma is a gas that has been ionized, meaning that the atoms have lost electrons. This results in a gas that is composed of both positively charged ions and negatively charged electrons.

                        The instructor then discusses how plasma is produced. He explains that plasma can be produced by heating a gas to a very high temperature. This high temperature causes the atoms to lose electrons, which results in the formation of plasma. Plasma can also be produced by subjecting a gas to a very low pressure. This low pressure can also cause the atoms to lose electrons, which results in the formation of plasma.
                        
                        The instructor then discusses the properties of plasma. He explains that plasma is a very good conductor of electricity. This is because plasma is composed of charged particles, which can easily move through the plasma. The instructor also explains that plasma is a very good emitter of light. This is because the charged particles in plasma can emit light when they collide with each other.
                        
                        The instructor then discusses the applications of plasma. He explains that plasma is used in a variety of applications, including lighting, welding, and medical treatments. Plasma is also used in the production of semiconductors and other materials.</p>
                
                </div>

                <div id="intro-plasma-ii" class="container">
                    <h2>Introduction to Plasma -II</h2>
                    <p>This is the second part of the introduction to plasma.</p>
                </div>

                <div id="plasma-oscillations" class="container">
                    <h2>Plasma Oscillations</h2>
                    <p>This section covers plasma oscillations.</p>
                </div>

                <div id="debye-shielding" class="container">
                    <h2>Debye Shielding</h2>
                    <p>This section covers Debye shielding.</p>
                </div>

                <div id="debye-potential" class="container">
                    <h2>Debye Potential</h2>
                    <p>This section covers Debye potential.</p>
                </div>

                <div id="quiz-week1" class="container">
                    <h2>Quiz: Week 1: Assignment 1</h2>
                    <p>This is the quiz for week 1.</p>
                </div>
            </div>
        </div>
    </main>
			`;
            break;
// week 2
		case 'week2':
			contentDiv.innerHTML = 
				`<main>
                <div class="page">
                <div class="content">
                <div class="container">
                soon
                </div>
                </div>
                </div>
                </main>`;
			break;
// week 3
case 'week3':
    contentDiv.innerHTML = 
      `
      <main>
                <div class="page">
                <div class="content">
                <div class="container">
                soon
                </div>
                </div>
                </div>
                </main>
      `;
			break;
// week 4 
case 'week4':
    contentDiv.innerHTML = 
      `
      <main>
                <div class="page">
                <div class="content">
                <div class="container">
                soon
                </div>
                </div>
                </div>
                </main>
      `;
			break;
// week 5
case 'week5':
      contentDiv.innerHTML = 
        `
        <main>
                  <div class="page">
                  <div class="content">
                  <div class="container">
                  soon
                  </div>
                  </div>
                  </div>
                  </main>
        `;
        break;
// week 6
case 'week6':
        contentDiv.innerHTML = 
          `
          <main>
                    <div class="page">
                    <div class="content">
                    <div class="container">
                    soon
                    </div>
                    </div>
                    </div>
                    </main>
          `;
          break;
// week 7
case 'week7':
          contentDiv.innerHTML = 
            `
            <main>
                      <div class="page">
                      <div class="content">
                      <div class="container">
                      soon
                      </div>
                      </div>
                      </div>
                      </main>
            `;
            break;
// week 8
case 'week8':
            contentDiv.innerHTML = 
             `
              <main>
                        <div class="page">
                        <div class="content">
                        <div class="container">
                        soon
                        </div>
                        </div>
                        </div>
                        </main>
              `;
              break;
// week 9
case 'week9':
            contentDiv.innerHTML = 
             `
              <main>
                        <div class="page">
                        <div class="content">
                        <div class="container">
                        soon
                        </div>
                        </div>
                        </div>
                        </main>
              `;
              break;
// week 10              
case 'week10':
              contentDiv.innerHTML = 
                `
                <main>
                          <div class="page">
                          <div class="content">
                          <div class="container">
                          soon
                          </div>
                          </div>
                          </div>
                          </main>
                `;
                break;
 // week 11               
case 'week11':
                contentDiv.innerHTML = 
                  `
                  <main>
                            <div class="page">
                            <div class="content">
                            <div class="container">
                            soon
                            </div>
                            </div>
                            </div>
                            </main>
                  `;
                  break;
// week 12
case 'week12':
                  contentDiv.innerHTML = 
                    `
                    <main>
                              <div class="page">
                              <div class="content">
                              <div class="container">
                              soon
                              </div>
                              </div>
                              </div>
                              </main>
                    `;
                    break;
// form
		case 'contact':
			contentDiv.innerHTML = 
				`<div class="page">
  <div class="content">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.</p>
    <form action="https://formbold.com/s/9R7GG" method="post" class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="message">Tell us your problem:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}
