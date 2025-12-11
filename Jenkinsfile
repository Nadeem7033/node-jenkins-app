pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // NodeJS installation name in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Nadeem7033/node-jenkins-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build step here if needed'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment step (if any)'
            }
        }
    }

    post {
        success {
            echo 'Build and tests succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
