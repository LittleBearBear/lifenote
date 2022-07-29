<?php


class LifenoteUsers
{
    /**
     * The database object
     *
     * @var object
     */
    private $_db;

    /**
     * Checks for a database object and creates one if none is found
     *
     * @param object $db
     * @return void
     */
    public function __construct($db=NULL)
    {
        if(is_object($db))
        {
            $this->_db = $db;
        }
        else
        {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME;
            $this->_db = new PDO($dsn, DB_USER, DB_PASS);
        }
    }

    // Class properties and other methods omitted to save space

    /**
     * Checks and inserts a new account email into the database
     *
     * @return string    a message indicating the action status
     */
    public function createAccount()
    {
        $u = trim($_POST['username']);
        $v = sha1(time());

        $sql = "SELECT COUNT(Username) AS theCount /*change Username to theCount ???*/
                FROM users
                WHERE Username=:email";
        if($stmt = $this->_db->prepare($sql)) {
            $stmt->bindParam(":email", $u, PDO::PARAM_STR);
            $stmt->execute();
            $row = $stmt->fetch();
            if($row['theCount']!=0) {
                return "<h2> Error </h2>"
                    . "<p> Sorry, that email is already in use. "
                    . "Please try again. </p>";
            }
            if(!$this->sendVerificationEmail($u, $v)) {
                return "<h2> Error </h2>"
                    . "<p> There was an error sending your"
                    . " verification email. Please "
                    . "<a href='mailto:shaochenxiong@foxmail.com'>contact "
                    . "us</a> for support. We apologize for the "
                    . "inconvenience. </p>";
            }
            $stmt->closeCursor();
        }

        $sql = "INSERT INTO subscribeusers (Username, ver_code)
                VALUES (:email, :ver)";
        if($stmt = $this->_db->prepare($sql)) {
            $stmt->bindParam(":email", $u, PDO::PARAM_STR);
            $stmt->bindParam(":ver", $v, PDO::PARAM_STR);
            $stmt->execute();
            $stmt->closeCursor();

            $userID = $this->_db->lastInsertId(); //lastInsertId()
            $url = dechex($userID);

            /*
             * If the UserID was successfully
             * retrieved, create a default list.
             */
            // $sql = "INSERT INTO subscribeusers (UserID, ListURL)
            //        VALUES ($userID, $url)";
            if(!$this->_db->query($sql)) {
                return "<h2> Success! </h2>"
                    . "<p> Your subscribe was successfully! "
                    . " Check your email!";
            } else {
                return "<h2> Success! </h2>"
                    . "<p> Your subscribe was successfully! "
                    . " Check your email!";
            }
        } else {
            return "<h2> Error </h2><p> Fail to mail you... "
                . " </p>";
        }
    }

    // Class properties and other methods omitted to save space

    /**
     * Sends an email to a user with a link to verify their new account
     *
     * @param string $email    The user's email address
     * @param string $ver    The random verification code for the user
     * @return boolean        TRUE on successful send and FALSE on failure
     */
    private function sendVerificationEmail($email, $ver)
    {
        $e = sha1($email); // For verification purposes
        $to = trim($email);

        //$link = '../accountverify.php?v='. $ver . '&e=' . $e;

        $subject = "[LifeNote] Subscribe Successfully!";

        $headers = "From: LifeNote <shaochenxiong@foxmail.com>";

        $msg =
        "Hi " . $to . "," . "\r\n" .
        "You have subscribed LifeNote!" . "\r\n" . 
        "We will inform you at the very first!" . "\r\n" .
        "If you have any questions, please shaochenxiong@foxmail.com." . "\r\n" .

        "--" . "\r\n" .
        "Thanks!" . "\r\n" .
        "www.lifenote.me" . "\r\n"
        ;


        return mail($to, $subject, $msg, $headers);
    }


}




?>