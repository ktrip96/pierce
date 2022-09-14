import styles from '../styles/LearnMore.module.css'
import { useRouter } from 'next/router'
import { RiArrowGoBackFill } from 'react-icons/ri'

function learnMore() {
  const router = useRouter()
  return (
    <div className={styles.outter_container}>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <RiArrowGoBackFill
            size={40}
            className={styles.backIcon}
            onClick={() => router.push('/')}
          />
          <h1 className={styles.title}>ΠΡΟΣ ΤΟΥΣ ΚΑΘΗΓΗΤΕΣ</h1>
          <i>
            Την ομιλία την αξιολογεί όχι αυτός που μιλάει αλλά αυτός που ακούει
            Πλάτων 427 – 347 π.Χ.
          </i>
          <br />
          <br />
          <p>
            Στόχος της αξιολόγησης είναι η επιβράβευση της προσπάθειάς σας. Σε
            καμία περίπτωση δεν έχει τιμωρητικό χαρακτήρα. Το schooligangs είναι
            ένα εργαλείο για αυτοδιόρθωση και βελτίωση του εκπαιδευτικού σας
            έργου με προτάσεις από τους άμεσα ενδιαφερόμενους, τους μαθητές σας.
          </p>
          <h1 className={styles.title}>ΠΡΟΣ ΤΟΥΣ ΓΟΝΕΙΣ</h1>
          <p>
            Η μονόπλευρη αξιολόγηση των μαθητών από τους εκπαιδευτικούς πολλές
            φορές είναι όχι απλά αυστηρή αλλά και άδικη. Αυτό έχει ως αποτέλεσμα
            τα παράπονα στο σπίτι και τις συζητήσεις στο προαύλιο. Μέσω του
            schooligangs οι μαθητές εμπλέκονται ακόμη περισσότερο στην
            εκπαιδευτική διαδικασία μιας και νιώθουν πως η γνώμη τους είναι
            σημαντική.
          </p>
          <h1 className={styles.title}>ΠΡΟΣ ΤΟΥΣ ΜΑΘΗΤΕΣ</h1>
          <i>
            Η κριτική όπως και η βροχή, πρέπει να είναι αρκετά ευγενική για να
            βοηθήσει την ανάπτυξη ενός ανθρώπου, και όχι να καταστρέψει τις
            ρίζες της Frank Clark, Αμερικανός πολιτικός
          </i>
          <br />
          <br />
          <p>
            Η εκπαίδευση είναι μια συνεχής διαδικασία κι αυτό δεν αφορά μόνο
            τους μαθητές αλλά και τους καθηγητές οι οποίοι όταν είναι δεκτικοί
            στην ανατροφοδότηση διαρκώς θα βελτιώνονται προς όφελος όλων μας.
          </p>
        </div>
      </div>
    </div>
  )
}

export default learnMore