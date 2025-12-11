pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Archive Files') {
            steps {
                archiveArtifacts artifacts: '**/*', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Node.js app...'
                bat '''
                if not exist C:\\node-deploy mkdir C:\\node-deploy
                xcopy /s /y * C:\\node-deploy\\
                '''
            }
        }

        stage('Start App') {
            steps {
                echo 'Starting server...'
                bat 'node app.js'
            }
        }
    }
}
