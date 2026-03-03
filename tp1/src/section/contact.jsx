
import styles from './contact.module.css'; 

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contactez-nous</h2>
      
      <div className={styles.container}>
        
        {/* الفورم (Formulaire) */}
        <div className={styles.formWrapper}>
          <h3>Envoyez un message</h3>
          <form>
            <div className={styles.formGroup}>
              <label>Nom complet</label>
              <input type="text" placeholder="Entrez votre nom" />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="Entrez votre email" />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea placeholder="Votre message..." rows="4"></textarea>
            </div>
            <button type="button" className={styles.btn}>Envoyer</button>
          </form>
        </div>

        {/* الخريطة (Cosmos Marrakech) */}
        <div className={styles.mapWrapper}>
          <h3>Notre Localisation (Cosmos)</h3>
          <iframe 
            title="Cosmos Marrakech"
            width="100%" 
            height="350" 
            style={{ border: 0, borderRadius: '10px' }} 
            loading="lazy" 
            allowFullScreen
           
            src="https://maps.google.com/maps?q=Cosmos%20Marrakech&t=&z=15&ie=UTF8&iwloc=&output=embed"
          >
          </iframe>
        </div>

      </div>
    </section>
  );
}