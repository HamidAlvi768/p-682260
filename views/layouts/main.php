
<?php

/** @var yii\web\View $this */
/** @var string $content */

use app\assets\AppAsset;
use yii\helpers\Html;
use yii\helpers\Url;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->registerCsrfMetaTags() ?>
    <?php $this->head() ?>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: 'rgba(86,79,253,1)'
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-neutral-50 flex flex-col overflow-hidden items-center">
<?php $this->beginBody() ?>

<div class="w-full max-w-[1552px] px-4 pt-11">
    <nav class="flex w-full gap-5 flex-wrap justify-between items-center">
        <div class="flex items-stretch gap-[40px_100px] text-black font-normal flex-wrap mt-1.5">
            <a href="<?= Url::home() ?>" class="flex items-stretch gap-[3px] text-xs tracking-[-0.12px] leading-none">
                <img src="<?= Yii::getAlias('@web/images/logo.png') ?>" 
                     class="aspect-[1.08] object-contain w-[70px] shrink-0" 
                     alt="Logo" />
                <div class="flex flex-col items-stretch my-auto">
                    <img src="<?= Yii::getAlias('@web/images/tutor-expert.png') ?>" 
                         class="aspect-[6.17] object-contain w-[142px]" 
                         alt="Tutor Expert" />
                    <div class="mt-[5px]">
                        <span style="font-family: Romanesco, -apple-system, Roboto, Helvetica, sans-serif;">By</span> Teachers
                    </div>
                </div>
            </a>
            <div class="flex items-stretch gap-[38px] text-[21px] whitespace-nowrap leading-normal mt-[11px]">
                <a href="<?= Url::home() ?>" class="hover:text-primary">Home</a>
                <div class="flex h-4 items-center gap-[3px] cursor-pointer hover:text-primary">
                    <span>Subjects</span>
                    <img src="<?= Yii::getAlias('@web/images/dropdown-arrow.png') ?>" 
                         class="aspect-[0.94] object-contain w-[15px] self-stretch shrink-0 my-auto" 
                         alt="" />
                </div>
                <div class="flex h-4 items-center gap-[3px] cursor-pointer hover:text-primary">
                    <span>Tutor</span>
                    <img src="<?= Yii::getAlias('@web/images/dropdown-arrow.png') ?>" 
                         class="aspect-[0.94] object-contain w-[15px] self-stretch shrink-0 my-auto" 
                         alt="" />
                </div>
            </div>
        </div>
        <a href="<?= Url::to(['site/login']) ?>" 
           class="bg-[rgba(86,79,253,1)] shadow-[0px_4px_14px_rgba(0,0,0,0.1)] min-h-[55px] text-xl text-white font-semibold whitespace-nowrap leading-none px-[59px] py-[13px] rounded-[11px] hover:bg-opacity-90 transition-colors">
            Login
        </a>
    </nav>
</div>

<?= $content ?>

<footer class="justify-center items-center bg-[#1D2026] self-stretch flex w-full flex-col pt-20">
    <div class="flex gap-6 flex-wrap max-w-[1400px] mx-auto px-4">
        <div class="flex min-w-60 flex-col items-stretch justify-center w-[424px] max-md:max-w-full">
            <div class="flex w-full max-w-[424px] flex-col items-stretch font-normal text-justify">
                <div class="text-[37px] text-white tracking-[-1.1px] leading-none">
                    LOGO
                </div>
                <div class="text-[#8C94A3] text-sm leading-[22px] tracking-[-0.14px] mt-5">
                    Aliquam rhoncus ligula est, non pulvinar elit
                    <br />
                    convallis nec. Donec mattis odio at.
                </div>
            </div>
            
            <div class="flex gap-3 mt-[26px]">
                <div class="bg-[rgba(54,59,71,0.4)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-50 transition-colors">
                    <img src="<?= Yii::getAlias('@web/images/facebook.png') ?>" 
                         class="aspect-[1] object-contain w-[18px]" 
                         alt="Facebook" />
                </div>
                <div class="bg-[rgba(54,59,71,0.4)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-50 transition-colors">
                    <img src="<?= Yii::getAlias('@web/images/twitter.png') ?>" 
                         class="aspect-[1] object-contain w-[18px]" 
                         alt="Twitter" />
                </div>
                <div class="bg-[rgba(86,79,253,1)] shadow-[0px_6px_20px_rgba(204,82,43,0.5)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-90 transition-colors">
                    <img src="<?= Yii::getAlias('@web/images/instagram.png') ?>" 
                         class="aspect-[1] object-contain w-[18px]" 
                         alt="Instagram" />
                </div>
                <div class="bg-[rgba(54,59,71,0.4)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-50 transition-colors">
                    <img src="<?= Yii::getAlias('@web/images/linkedin.png') ?>" 
                         class="aspect-[1] object-contain w-[18px]" 
                         alt="LinkedIn" />
                </div>
                <div class="bg-[rgba(54,59,71,0.4)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-50 transition-colors">
                    <img src="<?= Yii::getAlias('@web/images/youtube.png') ?>" 
                         class="aspect-[1] object-contain w-[18px]" 
                         alt="YouTube" />
                </div>
            </div>
        </div>

        <div class="flex flex-col items-stretch text-sm text-justify w-[200px]">
            <h3 class="text-white font-medium leading-none uppercase">
                Quick Links
            </h3>
            <div class="flex flex-col text-[#8C94A3] font-normal tracking-[-0.14px] leading-loose mt-5">
                <a href="#" class="hover:text-white transition-colors py-1.5">
                    About
                </a>
                <a href="#" class="hover:text-white transition-colors py-1.5">
                    Become Instructor
                </a>
                <a href="#" class="hover:text-white transition-colors py-1.5">
                    Contact
                </a>
                <a href="#" class="hover:text-white transition-colors py-1.5">
                    Career
                </a>
            </div>
        </div>

        <div class="flex flex-col items-stretch text-sm text-justify w-[200px]">
            <h3 class="text-white font-medium leading-none uppercase">
                Support
            </h3>
            <div class="flex flex-col text-[#8C94A3] font-normal tracking-[-0.14px] leading-loose mt-5">
                <a href="#" class="hover:text-white transition-colors py-1.5">
                    Help Center
                </a>
                <a href="#" class="hover:text-white transition-colors py-1.5">
                    FAQs
                </a>
                <a href="#" class="hover:text-white transition-colors py-1.5">
                    Terms & Condition
                </a>
                <a href="#" class="hover:text-white transition-colors py-1.5">
                    Privacy Policy
                </a>
            </div>
        </div>

        <div class="flex flex-col items-stretch text-justify w-[200px]">
            <h3 class="text-white text-sm font-medium leading-none uppercase">
                Download our app
            </h3>
            <div class="flex flex-col items-stretch justify-center mt-5 gap-3">
                <a href="#" class="bg-[rgba(54,59,71,0.4)] flex items-center gap-3.5 justify-center px-5 py-3 hover:bg-opacity-50 transition-colors">
                    <img src="<?= Yii::getAlias('@web/images/app-store.png') ?>" 
                         class="aspect-[1] object-contain w-8" 
                         alt="App Store" />
                    <div>
                        <div class="text-[#B7BAC7] text-[10px] font-normal leading-none">
                            Download now
                        </div>
                        <div class="text-white text-base font-medium leading-none">
                            App Store
                        </div>
                    </div>
                </a>
                <a href="#" class="bg-[rgba(54,59,71,0.4)] flex items-center gap-3.5 justify-center px-5 py-3 hover:bg-opacity-50 transition-colors">
                    <img src="<?= Yii::getAlias('@web/images/play-store.png') ?>" 
                         class="aspect-[1] object-contain w-8" 
                         alt="Play Store" />
                    <div>
                        <div class="text-[#B7BAC7] text-[10px] font-normal leading-none">
                            Download now
                        </div>
                        <div class="text-white text-base font-medium leading-none">
                            Play Store
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div class="justify-between items-center shadow-[0px_1px_0px_0px_rgba(54,59,71,0.50)_inset] bg-[#1D2026] flex w-full gap-[40px_100px] font-normal text-justify flex-wrap mt-20 px-4 py-6 md:px-10 lg:px-20">
        <div class="text-[#8c94a3] text-sm leading-loose tracking-[-0.14px]">
            © <?= date('Y') ?> - Tutor Expert. All rights reserved
        </div>
        <select class="border border-[#363B47] bg-[#1D2026] text-[#8C94A3] px-4 py-2 rounded">
            <option value="en">English</option>
            <option value="es">Español</option>
        </select>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
