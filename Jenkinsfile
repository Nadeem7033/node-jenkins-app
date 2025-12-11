pipeline {
    agent any

    tools {
        nodejs 'node18' // must match the name you entered in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install' // Use 'bat' on Windows
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                bat 'echo Deployment step here'
            }
        }
    }
}
