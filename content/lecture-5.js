const lecture5Slides = [
            {
                id: "slide-1",
                titleEn: "1. Lecture 5: Introduction",
                titleAr: "1. المحاضرة الخامسة: مقدمة",
                contentEn: `
                    <h3>Lecture 5: Fundamentals of Hydraulic Systems (1)</h3>
                    <p><strong>Technical and Administrative Supervision</strong><br>Under the patronage and supervision of the Engineering Sector for Equipment Management at Petrojet:</p>
                    <ul>
                        <li><strong>General Manager of Equipment Maintenance:</strong> Eng. Mahmoud Afify</li>
                        <li><strong>Scientific Material Preparation & Presentation:</strong> Eng. Ahmed Eissa</li>
                        <li><strong>Target Audience:</strong> Newly graduated engineers joining the electrical and mechanical maintenance sector.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>المحاضرة الخامسة: أساسيات ومبادئ الأنظمة الهيدروليكية (1)</h3>
                    <p><strong>الإشراف الفني والإداري للدورة</strong><br>تحت رعاية وإشراف القطاع الهندسي لإدارة المعدات بشركة بتروجت:</p>
                    <ul>
                        <li><strong>مدير عام قطاع صيانة المعدات:</strong> المهندس محمود عفيفي</li>
                        <li><strong>إعداد وتقديم المادة العلمية:</strong> المهندس أحمد عيسى</li>
                        <li><strong>المستهدفين:</strong> المهندسين حديثي التخرج الملتحقين بقطاع الصيانة الكهربائية والميكانيكية.</li>
                    </ul>
                `
            },
            {
                id: "slide-2",
                titleEn: "2. Lecture Objectives",
                titleAr: "2. أهداف المحاضرة التدريبية",
                contentEn: `
                    <h3>Lecture Objectives</h3>
                    <p>By the end of this lecture, the trainee engineer will be able to:</p>
                    <ul>
                        <li>Grasp the physical concepts and basic laws governing hydraulic fluids.</li>
                        <li>Differentiate accurately between Pressure and Flow Rate and understand their practical relationship.</li>
                        <li>Apply Pascal's law mathematically to analyze lifting mechanics inside crane cylinders.</li>
                        <li>Identify various hydraulic pump technologies and determine their efficiency.</li>
                        <li>Understand the engineering design of hydraulic tanks and advanced filtration systems.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>أهداف المحاضرة التدريبية</h3>
                    <p>بنهاية هذه المحاضرة، سيكون المهندس المتدرب قادراً على:</p>
                    <ul>
                        <li>استيعاب المفاهيم الفيزيائية والقوانين الأساسية الحاكمة للسوائل الهيدروليكية.</li>
                        <li>التفريق الدقيق والربط العملي بين الضغط (Pressure) ومعدل التدفق (Flow Rate).</li>
                        <li>تطبيق قانون باسكال حسابياً لتحليل ميكانيكا الرفع العملاقة داخل سلندرات الونش.</li>
                        <li>التعرف على التكنولوجيات المختلفة للمضخات الهيدروليكية وتحديد كفاءتها.</li>
                        <li>فهم التصميم الهندسي لخزانات الزيت الهيدروليكي وأنظمة الفلترة المتطورة.</li>
                    </ul>
                `
            },
            {
                id: "slide-3",
                titleEn: "3. Intro to Hydraulics",
                titleAr: "3. مقدمة في علم الهيدروليك",
                contentEn: `
                    <h3>Introduction to Hydraulics</h3>
                    <p>Heavy equipment and modern mobile cranes rely entirely on pressurized fluid systems to transmit and amplify mechanical power with exceptional efficiency.</p>
                    <p><strong>Key Engineering Advantages:</strong></p>
                    <ul>
                        <li><strong>High Power Density:</strong> Generating massive forces with compact mechanical sizes compared to electrical systems.</li>
                        <li><strong>Infinite Control:</strong> The ability to steer and lift loads with absolute millimeter precision.</li>
                        <li><strong>Ease of Transmission:</strong> Moving power via flexible hoses and lines, bypassing the complexities of rigid gears and mechanical shafts.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>مقدمة في علم الهيدروليك</h3>
                    <p>تعتمد المعدات الثقيلة وأوناش المحمول الحديثة بشكل كلي على موائع الزيت المضغوطة لنقل وتضخيم القدرة الميكانيكية بفاعلية وكفاءة استثنائية.</p>
                    <p><strong>أهم المزايا الهندسية المكتسبة:</strong></p>
                    <ul>
                        <li><strong>قوة رفع جبارة وعالية الكثافة (High Power Density):</strong> توليد قوى هائلة بأحجام ميكانيكية صغيرة مقارنة بالأنظمة الكهربائية.</li>
                        <li><strong>تحكم سلس وغير محدود السرعات (Infinite Control):</strong> إمكانية توجيه وسحب الحمولات بدقة ملليمترية متناهية.</li>
                        <li><strong>سهولة نقل الحركة:</strong> عبر خراطيم وخطوط مرنة متفاديةً تعقيدات التروس والأعمدة الميكانيكية الجافة.</li>
                    </ul>
                `
            },
            {
                id: "slide-4",
                titleEn: "4. Practical Applications",
                titleAr: "4. التطبيقات العملية",
                contentEn: `
                    <h3>Practical Applications in Cranes</h3>
                    <p>Hydraulic operations in a crane are divided into four main operational axes:</p>
                    <ul>
                        <li><strong>Boom Luffing:</strong> Executed via massive main cylinders ensuring vibration stability during lateral loads.</li>
                        <li><strong>Telescoping:</strong> Extending and retracting boom sections using internal cylinders or controlled hydraulic wire systems.</li>
                        <li><strong>Outriggers:</strong> Supporting the entire chassis and lifting it off the ground to provide a solid, stable base.</li>
                        <li><strong>Winch & Slew:</strong> Operating hydraulic rotation motors to slew the upper structure and spool the lifting wire.</li>
                    </ul>
                    <img src="https://images.unsplash.com/photo-1541888062-8178822db059?auto=format&fit=crop&w=800&q=80" alt="Crane Cylinders" class="slide-image">
                `,
                contentAr: `
                    <h3>التطبيقات العملية للنظام الهيدروليكي في الونش</h3>
                    <p>ينقسم عمل الهيدروليك بالونش إلى أربعة محاور تشغيلية أساسية:</p>
                    <ul>
                        <li><strong>رفع وخفض البوم (Boom Luffing):</strong> يتم عبر سلندرات رئيسية ضخمة تضمن اتزان الاهتزازات أثناء التحميل الجانبي.</li>
                        <li><strong>تلسكوب البوم (Telescoping):</strong> فرد ولم أجزاء البوم المتداخلة بسلندرات داخلية أو أنظمة الوايرات الهيدروليكية المحكومة.</li>
                        <li><strong>منظومة الركائز (Outriggers):</strong> تدعيم شاسيه الونش بالكامل ورفعه عن الأرض لتوفير قاعدة اتزان صلبة وثابتة.</li>
                        <li><strong>الونش والدوران (Winch & Slew):</strong> تشغيل محركات الدوران الهيدروليكية لتدوير الصينية العلوية ولف واير الرفع.</li>
                    </ul>
                    <img src="https://images.unsplash.com/photo-1541888062-8178822db059?auto=format&fit=crop&w=800&q=80" alt="Crane Cylinders" class="slide-image">
                `
            },
            {
                id: "slide-5",
                titleEn: "5. Main Components",
                titleAr: "5. المكونات الهيكلية",
                contentEn: `
                    <h3>Main Structural Components</h3>
                    <p>Any open or closed hydraulic system consists of five integral units:</p>
                    <ul>
                        <li><strong>Pumps:</strong> The heart of the system responsible for drawing oil and converting mechanical power into continuous hydraulic flow.</li>
                        <li><strong>Reservoir (Tank):</strong> A vessel for storing and cooling oil, settling debris, and separating air.</li>
                        <li><strong>Control Valves:</strong> The mastermind directing the oil, regulating pressures, and controlling speed.</li>
                        <li><strong>Actuators:</strong> Cylinders (linear motion) and Hydraulic Motors (rotary motion).</li>
                        <li><strong>Filters:</strong> The first line of defense to protect sensitive circuit parts from metal shavings and wear.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>المكونات الهيكلية الرئيسية للدائرة الهيدروليكية</h3>
                    <p>أي نظام هيدروليكي مغلق أو مفتوح داخل المعدة يتكون من خمس وحدات تكاملية:</p>
                    <ul>
                        <li><strong>المضخات (Pumps):</strong> قلب النظام المسؤول عن سحب الزيت وتحويل القدرة الميكانيكية إلى تدفق هيدروليكي مستمر.</li>
                        <li><strong>الخزان الهيدروليكي (Reservoir):</strong> وعاء تخزين وتبريد الزيت وترسيب الشوائب وفصل الهواء.</li>
                        <li><strong>بلوك صمامات التحكم (Control Valves):</strong> العقل المدبر لتوجيه الزيت، تنظيم الضغوط، والتحكم بالسرعة.</li>
                        <li><strong>المشغلات الميكانيكية (Actuators):</strong> السلندرات (حركة خطية) والمحركات الهيدروليكية (حركة دورانية).</li>
                        <li><strong>عناصر الفلترة (Filters):</strong> خط الدفاع الأول لحماية أجزاء الدائرة الحساسة من برادة الحديد والتآكل.</li>
                    </ul>
                `
            },
            {
                id: "slide-6",
                titleEn: "6. Hydraulic Pressure",
                titleAr: "6. مفهوم الضغط",
                contentEn: `
                    <h3>Hydraulic Pressure (P)</h3>
                    <p>Pressure is the fluid's resistance to flow caused by a mechanical load or obstruction in free flow lines.</p>
                    <div class="alert alert-warning">
                        <strong>Pressure</strong> = Force ÷ Area
                    </div>
                    <p>Standard engineering measurement units found in maintenance catalogs:</p>
                    <ul>
                        <li><strong>bar:</strong> The standard unit used in European equipment (like Liebherr cranes).</li>
                        <li><strong>PSI (Pound per Square Inch):</strong> The American imperial standard system. (1 bar ≈ 14.5 psi).</li>
                        <li><strong>MPa (Mega Pascal):</strong> The scientific symbol commonly used in calculations and technical hydraulic design.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>مفهوم الضغط الهيدروليكي (P)</h3>
                    <p>الضغط هو مقاومة السائل للتدفق الناشئ نتيجة وجود حمل ميكانيكي أو إعاقة لخطوط السير الحرة.</p>
                    <div class="alert alert-warning">
                        <strong>الضغط (Pressure)</strong> = القوة الميكانيكية (Force) ÷ المساحة السطحية (Area)
                    </div>
                    <p>وحدات القياس الهندسية المعتمدة في كتلوجات الصيانة:</p>
                    <ul>
                        <li><strong>البار (bar):</strong> الوحدة القياسية المعتمدة في المعدات الأوروبية (مثل أوناش Liebherr).</li>
                        <li><strong>الـ PSI:</strong> النظام القياسي الإمبراطوري الأمريكي. (1 bar ≈ 14.5 psi).</li>
                        <li><strong>الميجا باسكال (MPa):</strong> الرمز العلمي المتداول في الحسابات والتصميم الهيدروليكي الفني.</li>
                    </ul>
                `
            },
            {
                id: "slide-7",
                titleEn: "7. Hydraulic Flow Rate",
                titleAr: "7. معدل التدفق",
                contentEn: `
                    <h3>Hydraulic Flow Rate (Q)</h3>
                    <p>Flow is the volume of hydraulic oil passing through a specific point in the system during a given unit of time.</p>
                    <p>Flow is the primary and sole cause of giving kinetic speed to the actuators (Cylinders & Motors). Without it, the equipment remains stationary.</p>
                    <p>Common Capacity and Flow Units:</p>
                    <ul>
                        <li><strong>L/min (Liters per Minute):</strong> The most widely used expression in operational diagrams.</li>
                        <li><strong>GPM (Gallons per Minute):</strong> Frequently used in American equipment pumps.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>مفهوم معدل التدفق الهيدروليكي (Q)</h3>
                    <p>التدفق هو حجم الزيت الهيدروليكي الذي يمر عبر نقطة معينة في النظام خلال وحدة زمنية محددة.</p>
                    <p>التدفق هو المسبب الرئيسي والوحيد في إعطاء السرعة الحركية للمشغلات (Cylinders & Motors)، وبدونه تظل المعدة ثابتة.</p>
                    <p>وحدات السعة والتدفق الشائعة:</p>
                    <ul>
                        <li><strong>L/min (لتر في الدقيقة):</strong> وهو التعبير الأوسع انتشاراً في المخططات التشغيلية.</li>
                        <li><strong>GPM (جالون في الدقيقة):</strong> ويستخدم بكثرة في طلمبات المعدات الأمريكية.</li>
                    </ul>
                `
            },
            {
                id: "slide-8",
                titleEn: "8. Pressure vs Flow",
                titleAr: "8. الضغط ضد التدفق",
                contentEn: `
                    <h3>The Golden Rule of Troubleshooting: Pressure vs. Flow</h3>
                    <div class="alert alert-warning">
                        "Pumps produce FLOW, and RESISTANCE creates PRESSURE!"
                    </div>
                    <p><strong>Pressure represents (Mechanical Force):</strong><br>It determines the maximum total weight the equipment or cylinder can safely lift and surpass according to allowable load charts.</p>
                    <p><strong>Flow represents (Operational Speed):</strong><br>It determines the time required to fully extend the telescope boom or the speed of outrigger deployment. The higher the flow, the faster the technical performance.</p>
                `,
                contentAr: `
                    <h3>العلاقة الذهبية الحاكمة للأعطال: الضغط ضد التدفق</h3>
                    <div class="alert alert-warning">
                        "المضخات تُنتج التَّدَفُّق، والمُقَاوَمَة هي التي تُوجِد الضَّغْط!"
                    </div>
                    <p><strong>الضغط يُمثل (القوة الميكانيكية):</strong><br>يحدد الوزن الكلي الأقصى الذي يمكن للمعدة أو السلندر رفعه وتجاوزه بأمان وفقاً لخرائط التحميل المسموحة.</p>
                    <p><strong>التدفق يُمثل (السرعة التشغيلية):</strong><br>يحدد الزمن اللازم لفرد ذراع التلسكوب بالكامل أو سرعة خروج الركائز؛ فكلما زاد التدفق، زادت سرعة الأداء الفني.</p>
                `
            },
            {
                id: "slide-9",
                titleEn: "9. Pascal's Law",
                titleAr: "9. قانون باسكال",
                contentEn: `
                    <h3>Pascal's Law for Force Amplification</h3>
                    <p>"Pressure applied to a confined fluid in a closed vessel is transmitted equally and in all directions perpendicularly to its containing walls."</p>
                    <p>This principle explains how a simple thrust from a small hydraulic pump can lift a massive weight exceeding 100 tons by amplifying the internal surface area of the lifting cylinder (Piston Area).</p>
                `,
                contentAr: `
                    <h3>قانون باسكال لتضخيم القوى</h3>
                    <p>"الضغط المسلط على سائل محصور في وعاء مغلق ينتقل بالتساوي وبكافة الاتجاهات وبشكل عمودي على الجدران الحاوية له."</p>
                    <p>هذا المبدأ يوضح كيف يمكن لقوة دفع بسيطة من مضخة هيدروليكية صغيرة أن ترفع وزناً هائلاً يتعدى الـ 100 طن عبر تضخيم مساحة السطح الداخلية لسلندر الرفع (Piston Area).</p>
                `
            },
            {
                id: "slide-10",
                titleEn: "10. Hydraulic Pumps",
                titleAr: "10. طلمبات الهيدروليك",
                contentEn: `
                    <h3>Flow Generators: Hydraulic Pumps</h3>
                    <p>Hydraulic pumps approved in heavy equipment are divided into three main engineering categories:</p>
                    <ul>
                        <li><strong>Gear Pump (Fixed Displacement):</strong> Auxiliary outrigger circuits and hydraulic oil cooling.</li>
                        <li><strong>Piston Pump (Variable Displacement):</strong> Primary high-pressure circuits (Boom, Telescope, Wire).</li>
                        <li><strong>Vane Pump (Fixed / Variable):</strong> Charging equipment and some auxiliary hydraulic steering sets.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>مولدات التدفق: طلمبات الهيدروليك</h3>
                    <p>تنقسم طلمبات الهيدروليك المعتمدة في المعدات الثقيلة إلى ثلاثة تصنيفات هندسية رئيسية:</p>
                    <ul>
                        <li><strong>الطلمبة الترسية (ثابتة الإزاحة):</strong> دوائر الركائز المساعدة وتبريد زيت الهيدروليك.</li>
                        <li><strong>الطلمبة المكبسية (متغيرة الإزاحة):</strong> الدوائر الأساسية العالية الضغط (البوم، التلسكوب، الواير).</li>
                        <li><strong>الطلمبة الريشية (ثابتة / متغيرة):</strong> معدات الشحن وبعض مجموعات التوجيه الهيدروليكي المساعد.</li>
                    </ul>
                `
            },
            {
                id: "slide-11",
                titleEn: "11. Gear Pump",
                titleAr: "11. الطلمبة الترسية",
                contentEn: `
                    <h3>External Gear Pump</h3>
                    <p>It relies on two interlocking gears (a driver and a driven gear). When rotating, a vacuum and low pressure are generated on the suction side, forcing oil from the tank to fill the spaces between the teeth and the pump body and transfer it to the discharge side.</p>
                    <ul>
                        <li><strong>Pros:</strong> Simple mechanical design, economical cost, quick maintenance, and good resistance to impurities.</li>
                        <li><strong>Cons:</strong> Low efficiency at very high pressures (under 250 bar), and a fixed flow per mechanical revolution.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>الطلمبة الترسية الخارجية</h3>
                    <p>تعتمد على ترسين متداخلين (ترس قائد وترس منقاد). عند الدوران، يتولد خلخلة وضغط منخفض في جهة السحب، فيندفع الزيت من الخزان ليملأ الفراغات بين الأسنان وجسم الطلمبة وينتقل لجهة الطرد.</p>
                    <ul>
                        <li><strong>المميزات:</strong> تصميم ميكانيكي بسيط، تكلفة اقتصادية، صيانة سريعة ومقاومة جيدة للشوائب.</li>
                        <li><strong>العيوب:</strong> كفاءة منخفضة عند الضغوط العالية جداً (أقل من 250 بار)، وتدفق ثابت لكل لفة ميكانيكية.</li>
                    </ul>
                `
            },
            {
                id: "slide-12",
                titleEn: "12. Piston Pumps",
                titleAr: "12. الطلمبات المكبسية",
                contentEn: `
                    <h3>Axial Piston Pumps (Variable Displacement)</h3>
                    <p>Considered the standard approved option in modern Liebherr and Grove cranes due to their superior volumetric efficiency and advanced operational capability.</p>
                    <ul>
                        <li><strong>Working Mechanism:</strong> Internal pistons move back and forth depending on the inclination angle of the Swash Plate.</li>
                        <li><strong>Smart Control:</strong> Allows dynamic flow volume (L/min) change in response to actual load via electrical or hydraulic control signals (Load Sensing).</li>
                        <li>Successfully withstands massive operational pressures exceeding 350 bar.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>الطلمبات المكبسية متغيرة الإزاحة</h3>
                    <p>تعتبر الخيار القياسي المعتمد في أوناش Liebherr وGrove الحديثة بفضل كفاءتها الحجمية الفائقة وقدرتها التشغيلية المتطورة.</p>
                    <ul>
                        <li><strong>آلية العمل:</strong> مكابس داخلية تتحرك ترددياً بالاعتماد على زاوية الميل الخاصة بالقرص المائل (Swash Plate).</li>
                        <li><strong>التحكم الذكي:</strong> تتيح تغيير حجم التدفق ديناميكياً استجابةً للحمل الفعلي عبر إشارات التحكم الكهربائية أو الهيدروليكية (Load Sensing).</li>
                        <li>تحمل ضغوط تشغيلية عملاقة تتجاوز الـ 350 بار بنجاح.</li>
                    </ul>
                `
            },
            {
                id: "slide-13",
                titleEn: "13. Hydraulic Tank",
                titleAr: "13. الخزان الهيدروليكي",
                contentEn: `
                    <h3>The Hydraulic Tank and Its Advanced Functions</h3>
                    <p>The role of the oil tank in a crane is not limited to just holding fluids; it performs critical engineering tasks to prevent system collapse:</p>
                    <ul>
                        <li><strong>Cooling & Heat Dissipation:</strong> Getting rid of excess heat generated by oil friction through the external tank walls.</li>
                        <li><strong>Air Separation & Release:</strong> Preventing oil foaming phenomena which destroy pump components.</li>
                        <li><strong>Contaminant Settling:</strong> Providing a mechanical opportunity for fine metal shavings to settle at the bottom, away from the suction line.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>الخزان الهيدروليكي ووظائفه المتقدمة</h3>
                    <p>لا يقتصر دور خزان الزيت بالونش على مجرد الاحتفاظ بالموائع فقط، بل يؤدي مهاماً هندسية بالغة الأهمية لمنع انهيار المنظومة:</p>
                    <ul>
                        <li><strong>تبريد وتشتيت الحرارة:</strong> التخلص من الحرارة الزائدة المتولدة عن احتكاك الزيت عبر جدران الخزان الخارجية.</li>
                        <li><strong>فصل وتحرير الهواء المحبوس:</strong> منع ظواهر الرغوة الزيتية التي تسبب تلف أجزاء الطلمبات.</li>
                        <li><strong>ترسيب الملوثات:</strong> إتاحة فرصة ميكانيكية للبرادة الدقيقة للاستقرار بالقاع بعيداً عن خط السحب.</li>
                    </ul>
                `
            },
            {
                id: "slide-14",
                titleEn: "14. Oil Properties",
                titleAr: "14. خصائص الزيت",
                contentEn: `
                    <h3>Hydraulic Oil Properties</h3>
                    <p>Oil works in closed circuits as a power transmission medium, and it must possess four vital foundational properties:</p>
                    <ul>
                        <li><strong>Balanced Viscosity Index:</strong> Oil viscosity must not collapse at high temperatures, nor become too heavy in extreme cold.</li>
                        <li><strong>Internal Lubrication:</strong> Protecting moving parts inside pumps and valve blocks from dry friction and wear.</li>
                        <li><strong>Oxidation and Degradation Resistance:</strong> Preventing the formation of sludge that clogs fine restrictor orifices.</li>
                        <li><strong>Rust Prevention and Anti-Foaming:</strong> The oil must contain chemical additives that expel formed air bubbles to prevent cavitation.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>خصائص زيت الهيدروليك</h3>
                    <p>يعمل الزيت في الدوائر المغلقة كوسيط ناقل للقدرة، ويجب أن يمتلك أربع خصائص أساسية حيوية:</p>
                    <ul>
                        <li><strong>اللزوجة المتزنة:</strong> يجب ألا تنهار لزوجة الزيت عند ارتفاع الحرارة، وألا يصبح شديد الثقل بالبرودة الشديدة.</li>
                        <li><strong>التزييت والتشحيم الداخلي:</strong> حماية الأجزاء المتحركة داخل الطلمبات وبلوكات الصمامات من الاحتكاك الجاف والتآكل.</li>
                        <li><strong>مقاومة الأكسدة والتحلل:</strong> منع تشكل الرواسب الطينية التي تسد الفتحات الخانقة الدقيقة.</li>
                        <li><strong>مقاومة الصدأ ومنع الرغوة:</strong> احتواء الزيت على إضافات كيميائية تطرد فقاعات الهواء المتكونة لمنع حدوث التكهف (Cavitation).</li>
                    </ul>
                `
            },
            {
                id: "slide-15",
                titleEn: "15. Filtration System",
                titleAr: "15. منظومة الفلترة",
                contentEn: `
                    <h3>The Filtration System: Protector of the Hydraulic Circuit</h3>
                    <div class="alert alert-warning">
                        <strong>Engineering Fact:</strong> Over 80% of hydraulic system failures and breakdowns are directly traced to oil contamination by impurities!
                    </div>
                    <p>Filters are distributed in the crane across three strategic locations:</p>
                    <ul>
                        <li><strong>Suction Filter:</strong> Placed inside the tank right before the pump to protect it from large blocks and impurities.</li>
                        <li><strong>Pressure Filter:</strong> Installed after the pump and before sensitive valve blocks to purify exiting oil with high micronic precision.</li>
                        <li><strong>Return Filter:</strong> Cleans oil returning from cylinders and motors before it re-enters the main tank.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>منظومة الفلترة: حامي الدائرة الهيدروليكية</h3>
                    <div class="alert alert-warning">
                        <strong>حقيقة هندسية:</strong> أكثر من 80% من حالات فشل وأعطال الأنظمة الهيدروليكية تعود مباشرة لتلوث الزيت بالشوائب!
                    </div>
                    <p>تتوزع الفلاتر بالونش في ثلاثة مواقع استراتيجية:</p>
                    <ul>
                        <li><strong>فلتر خط السحب (Suction Filter):</strong> يوضع داخل الخزان قبل الطلمبة مباشرة؛ لحمايتها من الكتل والشوائب الكبيرة.</li>
                        <li><strong>فلتر الضغط العالي (Pressure Filter):</strong> يثبت بعد الطلمبة وقبل بلوك الصمامات الحساسة؛ لتنقية الزيت الخارج بدقة ميكرونية عالية.</li>
                        <li><strong>فلتر خط الراجع (Return Filter):</strong> ينظف الزيت العائد من السلندرات والمحركات قبل دخوله مجدداً للخزان الرئيسي.</li>
                    </ul>
                `
            },
            {
                id: "slide-16",
                titleEn: "16. Cavitation",
                titleAr: "16. التكهف",
                contentEn: `
                    <h3>Pump Destruction and the Cavitation Phenomenon</h3>
                    <p>The dangerous cavitation phenomenon occurs upon starving the pump (insufficient oil reaching the suction inlet), leading to severely low pressure and the formation of vapor bubbles inside the fluid.</p>
                    <ul>
                        <li>When these bubbles suddenly transfer to the high-pressure discharge side, they explode violently, producing destructive shockwaves.</li>
                        <li><strong>Visible Symptoms in the Workshop:</strong> A loud rumbling and very high, sharp metallic noise coming from the pump body, along with a sudden spike in equipment temperature and vibration in pressure hoses.</li>
                        <li><strong>Direct Causes:</strong> Clogged suction filter, increased oil viscosity, or a kinked main pump feed hose.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>أعطال ظاهرة التكهف وتدمير المضخات (Cavitation)</h3>
                    <p>تحدث ظاهرة التكهف الخطيرة عند تجويع الطلمبة (عدم وصول كمية كافية من الزيت لمدخل السحب)، مما يؤدي لانخفاض الضغط بشدة وتشكل فقاعات بخارية داخل المائع.</p>
                    <ul>
                        <li>عند انتقال هذه الفقاعات فجأة لجهة الطرد العالي الضغط، تنفجر بشكل عنيف جداً وتنتج موجات صدمية مدمرة.</li>
                        <li><strong>أعراض التكهف الظاهرية بالورشة:</strong> صوت دوي وضوضاء معدنية حادة ومرتفعة جداً تخرج من جسم الطلمبة، مع ارتفاع مفاجئ في حرارة المعدة واهتزاز خراطيم الضغط.</li>
                        <li><strong>الأسباب المباشرة:</strong> انسداد فلتر السحب، زيادة لزوجة الزيت، أو التواء خرطوم التغذية الرئيسي للطلمبة.</li>
                    </ul>
                `
            },
            {
                id: "slide-17",
                titleEn: "17. Overheating",
                titleAr: "17. الارتفاع المفرط للحرارة",
                contentEn: `
                    <h3>Excessive Overheating Breakdowns</h3>
                    <p>Hydraulic system temperature is tied to mechanical work efficiency. An excessive rise above 80°C causes the following disasters:</p>
                    <ul>
                        <li>Destruction and crushing of all self-sealing elements and O-Rings, causing catastrophic internal and external leaks.</li>
                        <li>Collapse and decline of oil viscosity, leading to a loss of lubrication ability for pistons and gears, accelerating their wear.</li>
                        <li><strong>Diagnosis & Treatment:</strong> Inspect the hydraulic oil cooler fan and verify its electrical trigger signal, or check if the Main Relief Valve is continuously dumping oil back to the tank unnecessarily.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>أعطال الارتفاع المفرط لدرجة الحرارة (Overheating)</h3>
                    <p>ترتبط حرارة النظام الهيدروليكي بكفاءة العمل الميكانيكي، والارتفاع الزائد فوق 80 درجة مئوية يتسبب في الكوارث التالية:</p>
                    <ul>
                        <li>تدمير وسحق جميع موانع التسرب الذاتي والأولسيهات (O-Rings) مما يسبب تسريبات داخلية وخارجية فادحة.</li>
                        <li>انهيار لزوجة الزيت وتراجعه، وبالتالي فقدان القدرة على تزييت المكابس والتروس والتعجيل بتآكلها.</li>
                        <li><strong>التشخيص وطرق العلاج:</strong> فحص مروحة المبرد الهيدروليكي (Oil Cooler) والتأكد من إشارة تشغيلها الكهربائية، أو التحقق من عدم تهريب صمام الأمان الرئيسي (Main Relief Valve) المستمر للزيت نحو التانك دون مبرر.</li>
                    </ul>
                `
            },
            {
                id: "slide-18",
                titleEn: "18. Leakages",
                titleAr: "18. التسريبات الهيدروليكية",
                contentEn: `
                    <h3>Hydraulic Leakages: Internal vs. External</h3>
                    <p>Heavy equipment maintenance engineers classify leakages into two engineering types:</p>
                    <ul>
                        <li><strong>External Leakage:</strong> Can be seen with the naked eye, such as a cut in a hose or a destroyed external cylinder seal. It causes continuous oil loss and environmental contamination at the worksite.</li>
                        <li><strong>Internal Leakage:</strong> Fluid bypassing from a high-pressure zone to a low-pressure zone via worn clearances inside valves or between cylinder motion chambers. It is unseen, but indicated by a terrible sluggishness in equipment movement, cylinders failing to hold assigned weights, and the generation of very high localized heat.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>التسريبات الهيدروليكية: الفارق بين الداخلي والخارجي</h3>
                    <p>يصنف مهندسو صيانة المعدات الثقيلة التسريبات إلى نوعين هندسيين:</p>
                    <ul>
                        <li><strong>التسريب الخارجي (External Leakage):</strong> يمكن رؤيته بالعين المجردة مثل قطع في الخراطيم، تدمير أولسيه السلندر الخارجي. يسبب نقصاً مستمراً في الزيت وتلوثاً بيئياً بموقع العمل.</li>
                        <li><strong>التسريب الداخلي (Internal Leakage):</strong> تهريب وتخطي المائع من منطقة الضغط العالي إلى منطقة الضغط المنخفض عبر الخلوصات المتآكلة داخل الصمامات أو بين غرف السلندر الحركية. لا تراه العين، لكن يُستدل عليه بـ بطء رهيب في حركة المعدة، وعجز السلندرات عن حمل الأوزان المقررة، وتولد حرارة موضعية عالية جداً.</li>
                    </ul>
                `
            },
            {
                id: "slide-19",
                titleEn: "19. ISO Symbols",
                titleAr: "19. قراءة المخططات",
                contentEn: `
                    <h3>Reading Diagrams: Standard ISO Symbols</h3>
                    <p>Proper tracing of hydraulic faults relies on a complete understanding of graphical symbols in maintenance manuals:</p>
                    <ul>
                        <li>Every square in a directional control valve symbol represents a separate operational position for the internal spool (e.g., extend position, hold position, retract position).</li>
                        <li>Dashed and thin lines represent Pilot Lines that carry low pressures to move large valves or hydraulically open check valves against loads.</li>
                        <li>Internal arrows illustrate the path and direction of actual oil flow between inlet and outlet ports.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>قراءة المخططات: هيكل الرموز القياسية (ISO Symbols)</h3>
                    <p>يعتمد التتبع السليم لأعطال الهيدروليك على الفهم الكامل للرموز الرسومية لكتيبات الصيانة:</p>
                    <ul>
                        <li>كل مربع في رمز صمام التحكم التوجيهي يمثل وضعية تشغيلية منفصلة للسبول الداخلي (مثل: وضعية فرد، وضعية ثبات، وضعية لم للسلندر).</li>
                        <li>الخطوط المتقطعة والدقيقة تمثل خطوط الإشارة الاسترشادية (Pilot Lines) التي تحمل ضغوطاً منخفضة لتحريك الصمامات الكبيرة أو فتح الصمامات المانعة للهبوط هيدروليكياً.</li>
                        <li>الأسهم الداخلية توضح مسار واتجاه تدفق الزيت الفعلي بين فتحات الدخول والخروج.</li>
                    </ul>
                `
            },
            {
                id: "slide-20",
                titleEn: "20. Preventive Maintenance",
                titleAr: "20. الصيانة الوقائية",
                contentEn: `
                    <h3>Daily Preventive Maintenance Protocol</h3>
                    <p>The maintenance engineer must supervise and verify the following operational points before the daily shift begins:</p>
                    <ul>
                        <li>Check oil level through the Sight Glass mounted on the tank while the crane is in its resting position (all cylinders fully retracted).</li>
                        <li>Inspect electrical and mechanical Filter Indicators to ensure no impurity bypass occurs.</li>
                        <li>Inspect high-pressure hoses feeding the outriggers and boom to ensure they are free of any mechanical cracks or external rubber blistering.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>بروتوكول الصيانة الوقائية اليومي للنظام الهيدروليكي</h3>
                    <p>على مهندس الصيانة الإشراف والتحقق من النقاط التشغيلية التالية قبل بدء الوردية اليومية:</p>
                    <ul>
                        <li>مستوى الزيت من خلال بيان زجاجة الرؤية (Sight Glass) المثبتة على التانك والونش في وضع المبيت (أول السلندرات ملمومة).</li>
                        <li>فحص مؤشرات اتساخ الفلاتر الكهربائية والميكانيكية (Filter Indicators) لضمان عدم حدوث باي-باس للشوائب.</li>
                        <li>فحص خراطيم الضغط العالي المغذية للركائز والبوم للتأكد من خلوها من أي تشققات ميكانيكية أو فقاعات جلدية خارجية هندسية.</li>
                    </ul>
                `
            },
            {
                id: "slide-21",
                titleEn: "21. Fault Scenario",
                titleAr: "21. سيناريو عطل",
                contentEn: `
                    <h3>Fault Scenario: Drop and Weakness in Overall Circuit Pressure</h3>
                    <p>If the operator complains of general weakness and total inability in all heavy crane movements, trace the following strategic steps:</p>
                    <ul>
                        <li>Install a calibrated Pressure Gauge on the Test Port of the main pump.</li>
                        <li>Activate a movement and monitor the gauge; if the pressure does not reach the required level (e.g., 280 bar), immediately proceed to inspect the Main Relief Valve.</li>
                        <li>The internal spring of the valve might be broken or an impurity may have prevented the needle from closing, causing a full, continuous discharge of flow back to the tank.</li>
                        <li>If the valve is intact, this is a strong indicator of mechanical pump efficiency collapse and massive internal wear necessitating its replacement.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>سيناريو عطل: هبوط وضعف الضغط العام بالدائرة</h3>
                    <p>إذا اشتكى المشغل من ضعف عام وعجز كامل في كافة حركات الونش الثقيلة، تتبع الخطوات الاستراتيجية الآتية:</p>
                    <ul>
                        <li>قم بتركيب ساعة قياس ضغط (Pressure Gauge) معايرة على فتحة الفحص (Test Port) الخاصة بالطلمبة الرئيسية.</li>
                        <li>قم بتفعيل إحدى الحركات وراقب الساعة؛ إذا لم يصل الضغط للمعدل المطلوب (مثلاً 280 بار)، توجه فوراً لفحص صمام الأمان الرئيسي (Main Relief Valve).</li>
                        <li>قد تكون السوستة الداخلية للصمام مكسورة أو توجد شائبة منعت إغلاق الإبرة، مما يسبب تصريفاً كاملاً للتدفق تانك بشكل مستمر.</li>
                        <li>إذا كان الصمام سليماً، فهذا مؤشر قوي على انهيار كفاءة الطلمبة ميكانيكياً ووجود تآكل داخلي فادح يستوجب استبدالها.</li>
                    </ul>
                `
            },
            {
                id: "slide-22",
                titleEn: "22. Safety Precautions",
                titleAr: "22. احتياطات الأمان",
                contentEn: `
                    <h3>Strict Safety Procedures and Precautions</h3>
                    <ul>
                        <li><strong>Never check for leaks with bare hands:</strong> Extremely high pressures can instantly penetrate human skin and inject oil into the bloodstream, causing fatal petroleum poisoning and limb amputation (Fluid Injection Injury).</li>
                        <li>Always use a piece of cardboard or rigid paper to check for invisible leaks by passing it over connections.</li>
                        <li><strong>Release Residual Pressure:</strong> Before loosening or dismantling cylinder hoses, ensure the engine is off and hydraulic accumulator pressures are discharged by moving the joystick multiple times in all directions.</li>
                    </ul>
                `,
                contentAr: `
                    <h3>إجراءات واحتياطات الأمان الصارمة بالورش ومواقع العمل</h3>
                    <ul>
                        <li><strong>منع فحص التسريبات باليد المجردة نهائياً:</strong> الضغوط العالية جداً قادرة على اختراق الجلد البشري فوراً وحقن الزيت بالدم مسببة تسمماً بترولياً قاتلاً وبتراً للأطراف (Fluid Injection Injury).</li>
                        <li>استخدم دائماً قطعة من الكرتون أو الورق المقوى المقاوم للبحث عن التسريبات غير المرئية عبر تمريرها فوق الوصلات.</li>
                        <li><strong>تفريغ الضغط المحصور (Residual Pressure):</strong> قبل فك أو فك خراطيم السلندرات، تأكد من إطفاء المحرك وتفريغ ضغوط المراكم الهيدروليكية عبر تحريك الجويستيك عدة مرات في جميع الاتجاهات.</li>
                    </ul>
                `
            },
            {
                id: "slide-23",
                titleEn: "23. ISO Cleanliness Code",
                titleAr: "23. معيار النظافة العالمي",
                contentEn: `
                    <h3>Global Oil Cleanliness Standard (ISO 4406 Cleanliness Code)</h3>
                    <p>The quality and contamination of hydraulic oil are evaluated inside certified labs based on three reference numbers (e.g., 18/16/13), which accurately reflect the number of contaminating particles in a 1 milliliter sample:</p>
                    <ul>
                        <li><strong>First Number:</strong> Represents particles with a size greater than or equal to 4 microns.</li>
                        <li><strong>Second Number:</strong> Represents particles with a size greater than or equal to 6 microns.</li>
                        <li><strong>Third Number:</strong> Represents particles with a size greater than or equal to 14 microns.</li>
                    </ul>
                    <div class="alert alert-warning">
                        Continuous monitoring of oil analysis results ensures the protection of highly sensitive Proportional Valves from sticking and sudden breakdown at Petrojet operational sites.
                    </div>
                `,
                contentAr: `
                    <h3>معيار النظافة العالمي للزيوت (ISO 4406 Cleanliness Code)</h3>
                    <p>يتم تقييم جودة وتلوث الزيت الهيدروليكي داخل معامل معتمدة بناءً على ثلاثة أرقام مرجعية (مثال: 18/16/13)، والتي تعبر بدقة عن عدد الجسيمات الملوثة في عينة بحجم 1 ملليلتر:</p>
                    <ul>
                        <li><strong>الرقم الأول:</strong> يمثل الجسيمات ذات الحجم الأكبر من أو يساوي 4 ميكرون.</li>
                        <li><strong>الرقم الثاني:</strong> يمثل الجسيمات ذات الحجم الأكبر من أو يساوي 6 ميكرون.</li>
                        <li><strong>الرقم الثالث:</strong> يمثل الجسيمات ذات الحجم الأكبر من أو يساوي 14 ميكرون.</li>
                    </ul>
                    <div class="alert alert-warning">
                        المتابعة المستمرة لنتائج تحليل الزيت تضمن حماية صمامات التحكم التناسبية (Proportional Valves) الحساسة جداً من الالتصاق والتعطل المفاجئ بمواقع تشغيل شركة بتروجت.
                    </div>
                `
            },
            {
                id: "slide-24",
                titleEn: "24. Open Discussion",
                titleAr: "24. المناقشة المفتوحة",
                contentEn: `
                    <h3>Open Discussion & Technical Questions</h3>
                    <p>The technical discussion floor is now open for newly graduated engineers:</p>
                    <ul>
                        <li>Raise questions about pressure principles, cavitation, and diagnosing crane pumps.</li>
                        <li>Exchange previous practical expertise and experiences from field maintenance workshops.</li>
                    </ul>
                    <p><strong>Next Lecture (God Willing):</strong><br>Lecture 6: Hydraulic Control Valves & Logic Circuits.</p>
                `,
                contentAr: `
                    <h3>المناقشة المفتوحة والأسئلة التقنية</h3>
                    <p>باب النقاش الفني مفتوح الآن للمهندسين حديثي التخرج:</p>
                    <ul>
                        <li>طرح أسئلة حول مبادئ الضغط والتكهف وتشخيص طلمبات الأوناش.</li>
                        <li>تبادل خبرات وتجارب عملية سابقة من واقع ورش الصيانة الميدانية.</li>
                    </ul>
                    <p><strong>المحاضرة القادمة إن شاء الله:</strong><br>المحاضرة السادسة: بلوكات صمامات التحكم الهيدروليكي والدوائر المنطقية (Hydraulic Control Valves & Circuits).</p>
                `
            },
            {
                id: "slide-25",
                titleEn: "25. References",
                titleAr: "25. مصادر الصور",
                contentEn: `
                    <h3>Image Sources & Documentation</h3>
                    <ul>
                        <li><strong>Petrojet Brand Logo:</strong> Wikimedia Commons</li>
                        <li><strong>Hydraulic Crane Cylinders:</strong> Industrial Media</li>
                        <li><strong>Pascal's Law Jack:</strong> Physics Illustration Library</li>
                        <li><strong>External Gear Pump Flow:</strong> Hydraulic Schematics DB</li>
                        <li><strong>Axial Piston Pump Internals:</strong> Engineering Cutaways</li>
                        <li><strong>Hydraulic Oil Reservoir:</strong> Components Repo</li>
                        <li><strong>Safety Signs & Warnings:</strong> Workplace Safety Index</li>
                    </ul>
                `,
                contentAr: `
                    <h3>توثيق مصادر الصور الهندسية والتوضيحية (Image Sources)</h3>
                    <ul>
                        <li><strong>Petrojet Brand Logo:</strong> ويكيميديا كومنز</li>
                        <li><strong>Hydraulic Crane Cylinders:</strong> مكتبة الصناعة</li>
                        <li><strong>Pascal's Law Jack:</strong> مكتبة رسومات الفيزياء</li>
                        <li><strong>External Gear Pump Flow:</strong> قاعدة بيانات المخططات</li>
                        <li><strong>Axial Piston Pump Internals:</strong> المقاطع الهندسية</li>
                        <li><strong>Hydraulic Oil Reservoir:</strong> مستودع المكونات</li>
                        <li><strong>Safety Signs & Warnings:</strong> مؤشر سلامة بيئة العمل</li>
                    </ul>
                `
            }
];
