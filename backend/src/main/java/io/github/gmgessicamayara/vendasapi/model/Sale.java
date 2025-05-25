package io.github.gmgessicamayara.vendasapi.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.github.gmgessicamayara.vendasapi.enums.PaymentMethod;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "tb_sale")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_customer")
    private Customer customer;

    @Enumerated(EnumType.STRING)
    @Column(name = "p_payment_method")
    private PaymentMethod paymentMethod;

    @OneToMany(mappedBy = "sale")
    private List<ItemSale> itens = new ArrayList<>();

    @Column(name = "p_total_price")
    private BigDecimal totalPrice;

    @Column(name = "p_registration_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate registrationDate;


}
