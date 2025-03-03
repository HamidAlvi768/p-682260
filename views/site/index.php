
<?php
/** @var yii\web\View $this */

use yii\helpers\Url;
use yii\helpers\Html;

$this->title = 'Tutor Expert - Find the Best Teachers';
?>

<!-- Hero Section -->
<section class="relative flex flex-col min-h-[969px] w-full items-stretch pt-11">
    <img src="<?= Yii::getAlias('@web/images/hero-bg.png') ?>" 
         class="absolute h-full w-full object-cover inset-0" 
         alt="Hero Background" />
    <div class="relative z-10 flex flex-col items-start max-w-[1552px] mx-auto px-4">
        <h1 class="text-[79px] font-black leading-[82px] mt-[220px] flex flex-wrap items-baseline gap-5 max-md:text-[40px] max-md:leading-[46px] max-md:mt-10">
            <span class="text-[#2940FF] text-[0.85em]">We</span>
            <span class="uppercase text-[#323232]">CONNECT</span>
            <span class="text-[#323232] text-[0.67em] block">individuals</span>
            <span class="text-[#323232] text-[0.67em] block w-full">to Assign</span>
        </h1>
        <p class="text-black text-[21px] font-semibold mt-5">
            Find top talent or open assignments with tools that keep you in control.
        </p>
        <div class="flex items-center gap-4 mt-[35px] max-md:flex-col max-md:w-full">
            <a href="<?= Url::to(['site/register']) ?>" 
               class="bg-[linear-gradient(90deg,#051391_0%,#5868FF_100%)] text-xl text-white font-semibold tracking-[0.1px] px-[49px] py-9 rounded-[20px] hover:opacity-90 transition-opacity">
                Register here!
            </a>
            <div class="bg-[rgba(255,255,255,0.37)] flex items-center gap-2.5 px-[58px] py-[26px] rounded-[18px]">
                <img src="<?= Yii::getAlias('@web/images/search-icon.png') ?>" 
                     class="aspect-[0.97] object-contain w-[31px]" 
                     alt="Search" />
                <input type="text" 
                       placeholder="Search For New Service" 
                       class="bg-transparent text-[15px] text-[rgba(139,126,126,1)] font-normal tracking-[0.07px] outline-none" />
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="relative bg-[rgba(255,255,255,0.75)] z-10 flex justify-center items-center flex-wrap gap-8 py-12 px-4">
    <div class="flex min-w-60 gap-4 items-center">
        <div class="flex w-10 h-10 bg-[#FFF1F1] rounded-full items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        </div>
        <div>
            <div class="text-[#1D2026] text-[32px] font-semibold leading-none tracking-[-0.32px]">
                67.1k
            </div>
            <div class="text-[#4E5566] text-sm font-medium leading-none tracking-[-0.14px] mt-2">
                Students
            </div>
        </div>
    </div>

    <div class="flex min-w-60 gap-4 items-center">
        <div class="flex w-10 h-10 bg-[#F1F1FF] rounded-full items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
        </div>
        <div>
            <div class="text-[#1D2026] text-[32px] font-semibold leading-none tracking-[-0.32px]">
                26k
            </div>
            <div class="text-[#4E5566] text-sm font-medium leading-none tracking-[-0.14px] mt-2">
                Certified Instructor
            </div>
        </div>
    </div>

    <div class="flex min-w-60 gap-4 items-center">
        <div class="flex w-10 h-10 bg-[#FFF1F1] rounded-full items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4444" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        </div>
        <div>
            <div class="text-[#1D2026] text-[32px] font-semibold leading-none tracking-[-0.32px]">
                72
            </div>
            <div class="text-[#4E5566] text-sm font-medium leading-none tracking-[-0.14px] mt-2">
                Country Language
            </div>
        </div>
    </div>

    <div class="flex min-w-60 gap-4 items-center">
        <div class="flex w-10 h-10 bg-[#F1FFF7] rounded-full items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        </div>
        <div>
            <div class="text-[#1D2026] text-[32px] font-semibold leading-none tracking-[-0.32px]">
                99.9%
            </div>
            <div class="text-[#4E5566] text-sm font-medium leading-none tracking-[-0.14px] mt-2">
                Success Rate
            </div>
        </div>
    </div>
</section>

<!-- Partners Section -->
<section class="w-full max-w-[1552px] px-4 mt-16">
    <h2 class="text-4xl text-[#101E46] font-bold text-center capitalize leading-[1.3]">
        Our partner
    </h2>
    <div class="overflow-x-auto flex w-full flex-col overflow-hidden justify-center mt-10 py-3">
        <img src="<?= Yii::getAlias('@web/images/partners.png') ?>" 
             class="aspect-[22.73] object-contain w-full" 
             alt="Partners" />
    </div>
</section>

<!-- Features Section -->
<section class="w-full max-w-[1581px] mt-16 px-4">
    <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
            <img src="<?= Yii::getAlias('@web/images/features.png') ?>" 
                 class="aspect-[1.26] object-contain w-full" 
                 alt="Features" />
        </div>
        <div class="flex flex-col gap-6">
            <h2 class="text-[45px] font-semibold leading-[60px]">
                Define specific, measurable goals for your students
            </h2>
            <p class="text-[rgba(108,108,108,1)] text-[21px] leading-[31px]">
                Focus on what students need most, whether it's foundational
                knowledge or advanced skills. Tailor your lesson plans to address
                individual learning styles and challenges.
            </p>
            <div class="mt-8">
                <h3 class="text-[32px] font-medium leading-loose">
                    No Fee to join
                </h3>
                <p class="text-[rgba(108,108,108,1)] text-[21px] leading-[31px] mt-4">
                    Browse education talent profiles, explore projects, or schedule
                    a consultation.
                </p>
            </div>
            <div class="mt-8">
                <h3 class="text-[32px] font-medium leading-loose">
                    Finding good client
                </h3>
                <p class="text-[rgba(108,108,108,1)] text-[21px] leading-[31px] mt-4">
                    Browse education talent profiles, explore projects, or schedule
                    a consultation.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Categories Section -->
<section class="w-full max-w-[1530px] px-4 mt-24">
    <h2 class="text-[45px] font-semibold text-center">
        Browse Subject by category
    </h2>
    <p class="text-[rgba(108,108,108,1)] text-[21px] text-center mt-6">
        School subjects can be categorized into various disciplines that
        students typically encounter throughout their education. Here's a list
        of common school subjects broken down into categories:
    </p>

    <div class="grid md:grid-cols-4 gap-5 mt-12">
        <?php foreach ([
            ['title' => 'Mathematics', 'description' => 'Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.'],
            ['title' => 'Science', 'description' => 'Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.'],
            ['title' => 'Humanities', 'description' => 'Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.'],
            ['title' => 'Content Writing', 'description' => 'Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.']
        ] as $subject): ?>
            <div class="bg-white flex grow flex-col items-stretch text-center w-full px-6 py-8 rounded-lg">
                <div class="self-center w-[88px] text-[40px] text-black font-medium whitespace-nowrap leading-none rounded-[120px]">
                    <div class="shadow-[0px_32px_32px_-12px_rgba(18,19,20,0.05)] bg-white w-full h-[88px] flex items-center justify-center rounded-[120px]">
                        ✍
                    </div>
                </div>
                <div class="flex w-full flex-col mt-8">
                    <h3 class="text-[#121314] text-xl font-semibold leading-[1.4]">
                        <?= Html::encode($subject['title']) ?>
                    </h3>
                    <p class="text-[#7B848B] text-sm font-normal leading-[22px] mt-3">
                        <?= Html::encode($subject['description']) ?>
                    </p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <div class="grid md:grid-cols-4 gap-5 mt-16">
        <?php foreach ([
            ['title' => 'Commerce Stream', 'description' => 'Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.'],
            ['title' => 'Humanities', 'description' => 'Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.'],
            ['title' => 'Arts and Design', 'description' => 'Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.'],
            ['title' => 'Content Writing', 'description' => 'Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.']
        ] as $subject): ?>
            <div class="bg-white flex grow flex-col items-stretch text-center w-full px-6 py-8 rounded-lg">
                <div class="self-center w-[88px] text-[40px] text-black font-medium whitespace-nowrap leading-none rounded-[120px]">
                    <div class="shadow-[0px_32px_32px_-12px_rgba(18,19,20,0.05)] bg-white w-full h-[88px] flex items-center justify-center rounded-[120px]">
                        ✍
                    </div>
                </div>
                <div class="flex w-full flex-col mt-8">
                    <h3 class="text-[#121314] text-xl font-semibold leading-[1.4]">
                        <?= Html::encode($subject['title']) ?>
                    </h3>
                    <p class="text-[#7B848B] text-sm font-normal leading-[22px] mt-3">
                        <?= Html::encode($subject['description']) ?>
                    </p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <a href="<?= Url::to(['site/subjects']) ?>" class="mx-auto mt-10 block w-fit bg-[rgba(86,79,253,1)] text-[27px] text-white font-bold tracking-[0.13px] px-8 py-4 rounded-[18px] hover:bg-opacity-90 transition-colors">
        Check More
    </a>
</section>

<!-- CTA Section -->
<section class="bg-[rgba(86,79,253,1)] w-full mt-24 py-20">
    <div class="max-w-[1552px] mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div class="text-white">
            <h2 class="text-[75px] font-semibold leading-[99px] max-md:text-[40px] max-md:leading-[58px]">
                The leading freelance solution for educational institutions.
            </h2>
            <div class="grid md:grid-cols-2 gap-8 mt-14">
                <div>
                    <h3 class="text-[32px] font-bold">
                        Dedicated hiring experts
                    </h3>
                    <p class="text-base mt-3.5">
                        Count on an account manager to find you the right talent and
                        see to your project's every need.
                    </p>
                </div>
                <div>
                    <h3 class="text-[32px] font-bold">
                        Satisfaction guarantee
                    </h3>
                    <p class="text-base mt-3.5">
                        Count on an account manager to find you the right talent and
                        see to your project's every need.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <img src="<?= Yii::getAlias('@web/images/cta-image.png') ?>" 
                 class="w-full h-auto" 
                 alt="CTA" />
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="w-full max-w-[1556px] px-4 mt-24">
    <div class="grid md:grid-cols-2 gap-8">
        <?php foreach ([
            [
                'name' => 'Guy Hawkins', 
                'timeAgo' => '1 week ago', 
                'rating' => 5, 
                'avatar' => '@web/images/avatar1.png',
                'content' => 'I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.'
            ],
            [
                'name' => 'Bessie Cooper', 
                'timeAgo' => '6 hours ago', 
                'rating' => 5, 
                'avatar' => '@web/images/avatar2.png',
                'content' => 'Webflow course was good, it coves design secrtes, and to build responsive web pages, blog, and some more tricks and tips about webflow. I enjoyed the course and it helped me to add web development skills related to webflow in my toolbox. Thank you Vako.'
            ]
        ] as $testimonial): ?>
            <div class="flex gap-[13px] justify-center flex-wrap">
                <img src="<?= Yii::getAlias($testimonial['avatar']) ?>" 
                     class="aspect-[1] object-contain w-[33px] shrink-0 rounded-[50%]" 
                     alt="<?= Html::encode($testimonial['name']) ?>" />
                <div class="flex min-w-60 flex-col items-stretch grow shrink w-full">
                    <div class="flex flex-col items-stretch">
                        <div class="flex items-center gap-[7px] text-xs text-[#6E7485] font-normal leading-none">
                            <div class="text-[#1D2026] text-right text-sm font-medium leading-none tracking-[-0.14px]">
                                <?= Html::encode($testimonial['name']) ?>
                            </div>
                            <div class="text-right">•</div>
                            <div><?= Html::encode($testimonial['timeAgo']) ?></div>
                        </div>
                        <div class="flex mt-[7px]">
                            <?php for ($i = 0; $i < $testimonial['rating']; $i++): ?>
                                <svg class="w-[13px] h-[13px] text-yellow-400 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            <?php endfor; ?>
                        </div>
                    </div>
                    <p class="text-[#4E5566] text-sm font-normal leading-[22px] tracking-[-0.14px] mt-2.5">
                        <?= Html::encode($testimonial['content']) ?>
                    </p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Find Teacher Section -->
<section class="w-full max-w-[1552px] px-4 mt-24">
    <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="grid grid-cols-3 grid-rows-3 gap-4">
            <?php foreach (range(1, 9) as $i): ?>
                <div class="<?= in_array($i, [1, 3, 5, 7, 9]) ? 'col-span-1 row-span-1' : 'col-span-2 row-span-2' ?>">
                    <img src="<?= Yii::getAlias('@web/images/teacher-' . $i . '.jpg') ?>" 
                         class="w-full h-full object-cover rounded-lg" 
                         alt="Teacher <?= $i ?>" />
                </div>
            <?php endforeach; ?>
        </div>
        <div>
            <h2 class="text-[45px] font-semibold leading-[60px]">
                Find The Best Teacher Here for your work
            </h2>
            <p class="text-[rgba(108,108,108,1)] text-[21px] leading-[31px] mt-6">
                Find a variety of skilled teachers, whether it's creative, technical, or advanced skills, you can have them. We're confident to deliver.
            </p>
            <a href="<?= Url::to(['site/teachers']) ?>" 
               class="mt-10 block w-fit bg-[rgba(86,79,253,1)] text-xl text-white font-semibold tracking-[0.1px] px-8 py-4 rounded-[18px] hover:bg-opacity-90 transition-colors">
                Find Best Teacher
            </a>
        </div>
    </div>
</section>

<!-- Second Browse Subject Section -->
<section class="w-full max-w-[1530px] px-4 mt-24 mb-24">
    <h2 class="text-[45px] font-semibold text-center">
        Browse Subject By Category
    </h2>
    <p class="text-[rgba(108,108,108,1)] text-[21px] text-center mt-6">
        School subjects can be categorized into various disciplines that
        students typically encounter throughout their education. Here's a list
        of common school subjects broken down into categories:
    </p>

    <div class="mt-12 grid md:grid-cols-2 gap-8">
        <?php foreach (range(1, 4) as $i): ?>
            <div class="flex gap-5 p-6 bg-white rounded-lg">
                <div class="bg-[#F9FAFB] w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                    <img src="<?= Yii::getAlias('@web/images/subject-icon-' . $i . '.png') ?>" 
                         class="w-8 h-8" 
                         alt="Subject Icon" />
                </div>
                <div>
                    <h3 class="text-xl font-semibold">Mathematics</h3>
                    <p class="text-[#6B7280] mt-2">
                        Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.
                        Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                    </p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>
