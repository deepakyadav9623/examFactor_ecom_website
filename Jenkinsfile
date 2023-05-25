node {
    properties([
    parameters([
        choice(choices: ['dev', 'qa', 'uat', 'prod'], description: "Please Select env", name: "Environment"),
        string(name: "BUCKET", defaultValue: "kips-all-wars", description: "bucketName"),
        //string(name: "BRANCH", defaultValue: "${gitlabSourceBranch}", description: "branchName"),
        string(name: "REGION", defaultValue: "ap-south-1", description: "regionName")
    ])
    ])
    def npmHome = tool 'node16.6.0'
    def NODE = 'node16.6.0'
    try {
        stage('Clone Repository') { 
            git url: 'https://gitlab.magicsw.com/kips-platform/ecommerce-ui', branch: '${gitlabSourceBranch}' , credentialsId: 'Ayush-Gitlab-KIPS'
            //checkout changelog: false, poll: false, scm: [$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Shivamrathi001/devops-webapp.git']]]
        }
        stage('Verifying tools'){
            nodejs(nodeJSInstallationName: NODE) {
                sh 'npm --version'
            }
        }
        stage('Build') {
            nodejs(nodeJSInstallationName: NODE) {
                    sh """ #!/bin/bash
                    npm --version
                    npm install
                    npm cache clean --force
                    npm run build
                    """
                }
        }
        // stage('Test') {
    //         try{
    //             nodejs(nodeJSInstallationName: NODE) {
//                 sh """ #!/bin/bash
//                 npm run test:coverage
//                 #above command will create a coverage folder which will be used by sonarScanner
//                 #CI=true (only if needed, if the test are stuck)
//                 """
    //         }
    //         finally{
    //             publishReport target: [
//                 allowMissing: false,
//                 reportDir: '/coverage/'
//                 ]
    //         }
    //     }
        stage('Deploy') {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'KIPS-AWS']]) {
                    def JOB_BASE_NAME = "${env.JOB_NAME}".split('/').last()
                    def destinationFile = "${env.JOB_BASE_NAME}/${gitlabSourceBranch}/${env.JOB_BASE_NAME}.zip"
                    def versionLabel = "${env.JOB_BASE_NAME}#${env.BUILD_NUMBER}"
                    def description = "${env.BUILD_URL}"
                    sh """\
                            zip -r ${env.JOB_BASE_NAME}.zip build/ appspec.yml Dependency_Scripts/
                            aws s3 cp ${env.JOB_BASE_NAME}.zip s3://${BUCKET}/${destinationFile}
                            aws s3api put-object-tagging --bucket ${BUCKET} --key ${destinationFile} --tagging '{"TagSet":[{"Key":"Build_Number","Value":"${env.BUILD_NUMBER}"}]}'
                            aws configure set default.region ${REGION}
                            aws deploy create-deployment \
                              --application-name '${env.JOB_BASE_NAME}' \
                              --deployment-config-name CodeDeployDefault.OneAtATime \
                              --deployment-group-name '${env.JOB_BASE_NAME}-${gitlabSourceBranch}-abp-deployment-group' \
                              --s3-location bucket=${BUCKET},bundleType=zip,key=${destinationFile}
                        """
                }
            
        }
        
    }
    finally{
        echo 'Stage is success'    
    }
}
