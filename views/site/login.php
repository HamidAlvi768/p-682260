
<?php

/** @var yii\web\View $this */
/** @var yii\bootstrap5\ActiveForm $form */
/** @var app\models\LoginForm $model */

use yii\bootstrap5\ActiveForm;
use yii\bootstrap5\Html;

$this->title = 'Login';
?>
<div class="site-login max-w-[1552px] mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center"><?= Html::encode($this->title) ?></h1>

    <div class="bg-white p-6 md:p-10 rounded-lg shadow-md max-w-md mx-auto">
        <p class="text-[#6B7280] mb-6">Please fill out the following fields to login:</p>

        <?php $form = ActiveForm::begin([
            'id' => 'login-form',
            'options' => ['class' => 'space-y-6'],
        ]); ?>

            <?= $form->field($model, 'username')->textInput([
                'class' => 'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                'placeholder' => 'Username'
            ])->label(false) ?>

            <?= $form->field($model, 'password')->passwordInput([
                'class' => 'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                'placeholder' => 'Password'
            ])->label(false) ?>

            <?= $form->field($model, 'rememberMe')->checkbox([
                'template' => "<div class=\"flex items-center\">{input} {label}</div>\n<div>{error}</div>",
            ]) ?>

            <div class="form-group">
                <?= Html::submitButton('Login', [
                    'class' => 'bg-[rgba(86,79,253,1)] w-full text-white font-semibold px-4 py-3 rounded-[11px] hover:bg-opacity-90 transition-colors',
                    'name' => 'login-button'
                ]) ?>
            </div>

        <?php ActiveForm::end(); ?>
    </div>
</div>
